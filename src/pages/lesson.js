import { render } from '../main.js';
import { findLesson, curriculum } from '../router-helpers.js';
import { renderMarkdown } from '../markdown.js';
import { markLessonDone, isExerciseDone } from '../progress.js';

function flatLessons() {
  return curriculum.flatMap((m) => m.lessons.map((l) => ({ ...l, module: m })));
}

export function renderLesson(lessonId) {
  const found = findLesson(lessonId);
  if (!found) {
    render(`<h1>Cours introuvable</h1><p><a href="#/">Retour à l'accueil</a></p>`, 'cours');
    return;
  }
  const { lesson, module } = found;
  markLessonDone(lesson.id);

  const flat = flatLessons();
  const idx = flat.findIndex((l) => l.id === lessonId);
  const prev = flat[idx - 1];
  const next = flat[idx + 1];
  const exercises = module.exercises
    .map(
      (e) => `<li>💻 <a href="#/exercice/${e.id}">${e.title}</a> ${isExerciseDone(e.id) ? '✅' : ''}</li>`
    )
    .join('');

  const html = `
    <div class="lesson-content">
      <p style="color:var(--text-dim); font-size:0.9rem;">${module.title}</p>
      ${renderMarkdown(lesson.content)}
      ${exercises ? `<h2>Exercice du module</h2><ul>${exercises}</ul>` : ''}
      <div class="lesson-nav">
        ${prev ? `<a class="btn secondary" href="#/cours/${prev.id}">← ${prev.title}</a>` : '<span></span>'}
        ${next ? `<a class="btn" href="#/cours/${next.id}">Cours suivant →</a>` : `<a class="btn" href="#/sandbox">Essayer le bac à sable →</a>`}
      </div>
    </div>`;

  render(html, 'cours');
}
