// Définition du programme pédagogique.
// Les contenus Markdown / Python sont importés en brut (?raw) depuis /content et /exercises.

import lesson1a from '../content/01-01-variables-et-affichage.md?raw';
import lesson1b from '../content/01-02-types-de-donnees.md?raw';
import lesson2a from '../content/02-01-conditions.md?raw';
import lesson2b from '../content/02-02-operateurs-logiques.md?raw';
import lesson3a from '../content/03-01-boucles-for.md?raw';
import lesson3b from '../content/03-02-boucles-while.md?raw';
import lesson4a from '../content/04-01-fonctions.md?raw';
import lesson4b from '../content/04-02-listes.md?raw';

import ex1Statement from '../exercises/ex-01/statement.md?raw';
import ex1Starter from '../exercises/ex-01/starter.py?raw';
import ex1Tests from '../exercises/ex-01/tests.py?raw';
import ex2Statement from '../exercises/ex-02/statement.md?raw';
import ex2Starter from '../exercises/ex-02/starter.py?raw';
import ex2Tests from '../exercises/ex-02/tests.py?raw';
import ex3Statement from '../exercises/ex-03/statement.md?raw';
import ex3Starter from '../exercises/ex-03/starter.py?raw';
import ex3Tests from '../exercises/ex-03/tests.py?raw';
import ex4Statement from '../exercises/ex-04/statement.md?raw';
import ex4Starter from '../exercises/ex-04/starter.py?raw';
import ex4Tests from '../exercises/ex-04/tests.py?raw';

export const curriculum = [
  {
    id: 'module-1',
    title: 'Module 1 — Les bases',
    description: 'Variables, affichage et premiers calculs en Python.',
    lessons: [
      { id: '1-1', title: 'Variables et affichage', content: lesson1a },
      { id: '1-2', title: 'Les types de données', content: lesson1b },
    ],
    exercises: [
      { id: 'ex-01', title: 'Bonjour le monde', moduleId: 'module-1', statement: ex1Statement, starter: ex1Starter, tests: ex1Tests },
    ],
  },
  {
    id: 'module-2',
    title: 'Module 2 — Les conditions',
    description: 'Prendre des décisions avec if, else et elif.',
    lessons: [
      { id: '2-1', title: 'if / else / elif', content: lesson2a },
      { id: '2-2', title: 'Opérateurs logiques', content: lesson2b },
    ],
    exercises: [
      { id: 'ex-02', title: 'Majorité ou minorité ?', moduleId: 'module-2', statement: ex2Statement, starter: ex2Starter, tests: ex2Tests },
    ],
  },
  {
    id: 'module-3',
    title: 'Module 3 — Les boucles',
    description: 'Répéter des actions avec for et while.',
    lessons: [
      { id: '3-1', title: 'La boucle for', content: lesson3a },
      { id: '3-2', title: 'La boucle while', content: lesson3b },
    ],
    exercises: [
      { id: 'ex-03', title: 'Table de multiplication', moduleId: 'module-3', statement: ex3Statement, starter: ex3Starter, tests: ex3Tests },
    ],
  },
  {
    id: 'module-4',
    title: 'Module 4 — Fonctions et listes',
    description: 'Organiser son code avec des fonctions et des listes.',
    lessons: [
      { id: '4-1', title: 'Définir des fonctions', content: lesson4a },
      { id: '4-2', title: 'Les listes', content: lesson4b },
    ],
    exercises: [
      { id: 'ex-04', title: 'Moyenne d\'une liste', moduleId: 'module-4', statement: ex4Statement, starter: ex4Starter, tests: ex4Tests },
    ],
  },
];

export function findLesson(lessonId) {
  for (const mod of curriculum) {
    const lesson = mod.lessons.find((l) => l.id === lessonId);
    if (lesson) return { lesson, module: mod };
  }
  return null;
}

export function findExercise(exId) {
  for (const mod of curriculum) {
    const ex = mod.exercises.find((e) => e.id === exId);
    if (ex) return { exercise: ex, module: mod };
  }
  return null;
}

export function allExercises() {
  return curriculum.flatMap((m) => m.exercises);
}
