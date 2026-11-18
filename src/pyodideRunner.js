// Gestion du chargement de Pyodide (Python en WebAssembly) et de l'exécution de code.

let pyodidePromise = null;

export function loadPyodide(onProgress) {
  if (pyodidePromise) return pyodidePromise;

  pyodidePromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
    script.onload = async () => {
      try {
        onProgress?.('Chargement de Python…');
        const pyodide = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/',
        });
        resolve(pyodide);
      } catch (err) {
        pyodidePromise = null;
        reject(err);
      }
    };
    script.onerror = () => {
      pyodidePromise = null;
      reject(new Error('Impossible de charger Pyodide (vérifie ta connexion).'));
    };
    document.head.appendChild(script);
  });

  return pyodidePromise;
}

/**
 * Exécute du code Python et retourne { ok, output, error }.
 * Le stdout/stderr est capturé et redirigé vers la sortie.
 */
export async function runPython(code) {
  const pyodide = await loadPyodide();
  let output = '';
  pyodide.setStdout({ batched: (s) => { output += s + '\n'; } });
  pyodide.setStderr({ batched: (s) => { output += s + '\n'; } });
  try {
    await pyodide.runPythonAsync(code);
    return { ok: true, output, error: null };
  } catch (err) {
    return { ok: false, output, error: String(err) };
  }
}

/**
 * Exécute le code de l'élève puis les tests, et retourne le détail des résultats.
 * Les tests utilisent des assert ; chaque échec est remonté avec son message.
 */
export async function runExercise(studentCode, testsCode) {
  const pyodide = await loadPyodide();
  let output = '';
  pyodide.setStdout({ batched: (s) => { output += s + '\n'; } });
  pyodide.setStderr({ batched: (s) => { output += s + '\n'; } });

  try {
    await pyodide.runPythonAsync(studentCode);
  } catch (err) {
    return { ok: false, output, error: String(err), testsPassed: 0, testsTotal: 0, details: [] };
  }

  // On rend la sortie du code de l'élève accessible aux tests via _sortie_eleve.
  pyodide.globals.set('_sortie_eleve', output);

  // On exécute les tests dans un namespace propre pour isoler les noms.
  const wrapped = `
import traceback as _tb
_results = []
def _check(name, fn):
    try:
        fn()
        _results.append((name, True, ""))
    except AssertionError as e:
        _results.append((name, False, str(e) or "assertion échouée"))
    except Exception as e:
        _results.append((name, False, f"{_type(e)}: {e}"))
def _type(e):
    return type(e).__name__
${testsCode}
`;
  try {
    await pyodide.runPythonAsync(wrapped);
    const results = pyodide.globals.get('_results').toJs();
    const details = results.map(([name, passed, msg]) => ({ name, passed, message: msg }));
    const passed = details.filter((d) => d.passed).length;
    return { ok: passed === details.length, output, error: null, testsPassed: passed, testsTotal: details.length, details };
  } catch (err) {
    return { ok: false, output, error: String(err), testsPassed: 0, testsTotal: 0, details: [] };
  }
}
