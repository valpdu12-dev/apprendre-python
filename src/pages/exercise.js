import { render } from '../main.js';
import { findExercise, esc } from '../router-helpers.js';
import { renderMarkdown } from '../markdown.js';
import { runExercise, loadPyodide } from '../pyodideRunner.js';
import { markExerciseDone, isExerciseDone } from '../progress.js';

export function renderExercise(exId) {
  const found = findExercise(exId);
  if (!found) {
    render(`<h1>Exercice introuvable</h1><p><a href="#/">Retour à l'accueil</a></p>`, 'cours');
    return;
  }
  const { exercise, module } = found;

  const html = `
    <p style="color:var(--text-dim); font-size:0.9rem;"><a href="#/">Accueil</a> › ${esc(module.title)}</p>
    <h1>💻 ${esc(exercise.title)} ${isExerciseDone(exercise.id) ? '<span class="status-badge done">✅ réussi</span>' : '<span class="status-badge todo">à faire</span>'}</h1>
    <div class="lesson-content" style="max-width:none;">${renderMarkdown(exercise.statement)}</div>
    <div class="editor-panel">
      <div>
        <div class="toolbar">
          <button class="btn" id="btn-run">▶ Exécuter</button>
          <button class="btn secondary" id="btn-reset">↺ Remettre le code de départ</button>
          <span id="run-status" class="loading-pyodide"></span>
        </div>
        <textarea id="editor" class="code-editor" spellcheck="false">${esc(exercise.starter)}</textarea>
      </div>
      <div>
        <h3 style="margin-top:0;">Console</h3>
        <div id="output" class="output"><span class="info">Charge Python dans ton navigateur puis clique sur « ▶ Exécuter »…</span></div>
      </div>
    </div>`;

  render(html, 'cours');

  const editor = document.getElementById('editor');
  const output = document.getElementById('output');
  const status = document.getElementById('run-status');
  const btnRun = document.getElementById('btn-run');
  const btnReset = document.getElementById('btn-reset');

  btnReset.addEventListener('click', () => {
    editor.value = exercise.starter;
    output.innerHTML = '<span class="info">Code de départ restauré.</span>';
  });

  btnRun.addEventListener('click', async () => {
    btnRun.disabled = true;
    status.textContent = 'Chargement de Python…';
    output.innerHTML = '';
    try {
      await loadPyodide((msg) => { status.textContent = msg; });
      status.textContent = 'Exécution…';
      const result = await runExercise(editor.value, exercise.tests);
      let htmlOut = '';
      if (result.output) htmlOut += esc(result.output) + '\n';
      if (result.error) htmlOut += `<span class="ko">${esc(result.error)}</span>\n`;
      if (result.details && result.details.length) {
        for (const d of result.details) {
          htmlOut += d.passed
            ? `<span class="ok">✅ ${esc(d.name)}</span>\n`
            : `<span class="ko">❌ ${esc(d.name)}${d.message ? ' — ' + esc(d.message) : ''}</span>\n`;
        }
        htmlOut += result.ok
          ? `<span class="ok">🎉 Bravo, exercice réussi (${result.testsPassed}/${result.testsTotal}) !</span>`
          : `<span class="info">${result.testsPassed}/${result.testsTotal} tests réussis.</span>`;
        if (result.ok) markExerciseDone(exercise.id);
      } else if (result.ok) {
        htmlOut += '<span class="ok">✅ Exécution terminée sans erreur.</span>';
      }
      output.innerHTML = htmlOut || '<span class="info">(aucune sortie)</span>';
      status.textContent = '';
      if (result.ok && result.details && result.details.length) {
        setTimeout(() => renderExercise(exId), 1200);
      }
    } catch (err) {
      output.innerHTML = `<span class="ko">${esc(String(err))}</span>`;
      status.textContent = '';
    } finally {
      btnRun.disabled = false;
    }
  });
}
