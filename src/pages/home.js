import { render } from '../main.js';
import { curriculum, allExercises, progressStatsSafe, esc } from '../router-helpers.js';
import { isLessonDone, isExerciseDone } from '../progress.js';

function moduleCard(mod) {
  const lessons = mod.lessons
    .map(
      (l) => `<li>📖 <a href="#/cours/${l.id}">${esc(l.title)}</a> ${isLessonDone(l.id) ? '✅' : ''}</li>`
    )
    .join('');
  const exercises = mod.exercises
    .map(
      (e) => `<li>💻 <a href="#/exercice/${e.id}">${esc(e.title)}</a> ${isExerciseDone(e.id) ? '✅' : ''}</li>`
    )
    .join('');
  return `
    <div class="module-card" style="display:block; color:inherit;">
      <h3>${esc(mod.title)}</h3>
      <p>${esc(mod.description)}</p>
      <span class="count">${mod.lessons.length} cours · ${mod.exercises.length} exercice(s)</span>
      <ul style="margin:0.75rem 0 0; padding-left:1.2rem;">${lessons}${exercises}</ul>
    </div>`;
}

export function renderHome(active = 'home') {
  const stats = progressStatsSafe();
  const total = stats.totalLessons + stats.totalExercises;
  const done = stats.lessonsDone + stats.exercisesDone;
  const pct = total ? Math.round((done / total) * 100) : 0;

  const html = `
    <section class="hero">
      <h1>Apprends à coder en <span>Python</span> 🐍</h1>
      <p>Cours interactifs, exercices corrigés automatiquement et un éditeur de code directement dans ton navigateur. Aucune installation, aucun compte : tout se passe ici.</p>
      <a class="btn" href="#/cours/1-1">Commencer le premier cours →</a>
      <div style="max-width:420px; margin:2rem auto 0; text-align:left;">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; color:var(--text-dim);">
          <span>Ta progression</span><span>${done}/${total} (${pct}%)</span>
        </div>
        <div class="progress-bar"><div style="width:${pct}%"></div></div>
      </div>
    </section>
    <section class="module-grid">
      ${curriculum.map(moduleCard).join('')}
    </section>`;

  render(html, active);
}
