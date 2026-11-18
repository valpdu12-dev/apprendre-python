// Petits utilitaires partagés par le routeur et les pages.
import { curriculum, allExercises, findLesson, findExercise } from './curriculum.js';
import { progressStats } from './progress.js';

export { curriculum, allExercises, findLesson, findExercise };

export function progressStatsSafe() {
  const lessons = curriculum.reduce((n, m) => n + m.lessons.length, 0);
  const exercises = allExercises().length;
  return progressStats(lessons, exercises);
}

export function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
