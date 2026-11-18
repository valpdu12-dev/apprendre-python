import { render } from '../main.js';
import { esc } from '../router-helpers.js';
import { runPython, loadPyodide } from '../pyodideRunner.js';

const STARTER = `# Bac à sable Python — écris ce que tu veux !
print("Bonjour depuis le bac à sable 🐍")

for i in range(3):
    print("ligne", i)
`;

export function renderSandbox() {
  const html = `
    <h1>🧪 Bac à sable</h1>
    <p style="color:var(--text-dim);">Écris du Python librement et exécute-le directement dans ton navigateur.</p>
    <div class="editor-panel">
      <div>
        <div class="toolbar">
          <button class="btn" id="btn-run">▶ Exécuter</button>
          <button class="btn secondary" id="btn-clear">🗑 Effacer la console</button>
          <span id="run-status" class="loading-pyodide"></span>
        </div>
        <textarea id="editor" class="code-editor" spellcheck="false" style="min-height:380px;">${esc(STARTER)}</textarea>
      </div>
      <div>
        <h3 style="margin-top:0;">Console</h3>
        <div id="output" class="output"><span class="info">Prêt. Clique sur « ▶ Exécuter ».</span></div>
      </div>
    </div>`;

  render(html, 'sandbox');

  const editor = document.getElementById('editor');
  const output = document.getElementById('output');
  const status = document.getElementById('run-status');
  const btnRun = document.getElementById('btn-run');
  const btnClear = document.getElementById('btn-clear');

  btnClear.addEventListener('click', () => { output.innerHTML = ''; });

  btnRun.addEventListener('click', async () => {
    btnRun.disabled = true;
    status.textContent = 'Chargement de Python…';
    try {
      await loadPyodide((msg) => { status.textContent = msg; });
      status.textContent = 'Exécution…';
      const result = await runPython(editor.value);
      let htmlOut = '';
      if (result.output) htmlOut += esc(result.output);
      if (result.error) htmlOut += `<span class="ko">${esc(result.error)}</span>\n`;
      output.innerHTML = htmlOut || '<span class="info">(aucune sortie)</span>';
      status.textContent = '';
    } catch (err) {
      output.innerHTML = `<span class="ko">${esc(String(err))}</span>`;
      status.textContent = '';
    } finally {
      btnRun.disabled = false;
    }
  });
}
