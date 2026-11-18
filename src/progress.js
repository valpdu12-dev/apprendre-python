// Suivi de la progression de l'élève, stocké en localStorage.

const KEY = 'apprendre-python-progress-v1';

function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || { lessonsDone: [], exercisesDone: [] };
  } catch {
    return { lessonsDone: [], exercisesDone: [] };
  }
}

function write(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function markLessonDone(id) {
  const data = read();
  if (!data.lessonsDone.includes(id)) {
    data.lessonsDone.push(id);
    write(data);
  }
}

export function markExerciseDone(id) {
  const data = read();
  if (!data.exercisesDone.includes(id)) {
    data.exercisesDone.push(id);
    write(data);
  }
}

export function isLessonDone(id) {
  return read().lessonsDone.includes(id);
}

export function isExerciseDone(id) {
  return read().exercisesDone.includes(id);
}

export function progressStats(totalLessons, totalExercises) {
  const data = read();
  return {
    lessonsDone: data.lessonsDone.length,
    exercisesDone: data.exercisesDone.length,
    totalLessons,
    totalExercises,
  };
}
