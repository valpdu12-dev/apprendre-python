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
import lesson5a from '../content/05-01-methodes-des-chaines.md?raw';
import lesson5b from '../content/05-02-slicing-et-fstrings.md?raw';
import lesson6a from '../content/06-01-methodes-de-listes.md?raw';
import lesson6b from '../content/06-02-comprehensions-de-listes.md?raw';
import lesson7a from '../content/07-01-dictionnaires.md?raw';
import lesson7b from '../content/07-02-tuples-et-ensembles.md?raw';
import lesson8a from '../content/08-01-try-except.md?raw';
import lesson8b from '../content/08-02-raise-et-exceptions.md?raw';
import lesson9a from '../content/09-01-args-kwargs.md?raw';
import lesson9b from '../content/09-02-portee-docstrings-annotations.md?raw';
import lesson10a from '../content/10-01-classes-et-objets.md?raw';
import lesson10b from '../content/10-02-heritage-et-polymorphisme.md?raw';

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
import ex5Statement from '../exercises/ex-05/statement.md?raw';
import ex5Starter from '../exercises/ex-05/starter.py?raw';
import ex5Tests from '../exercises/ex-05/tests.py?raw';
import ex6Statement from '../exercises/ex-06/statement.md?raw';
import ex6Starter from '../exercises/ex-06/starter.py?raw';
import ex6Tests from '../exercises/ex-06/tests.py?raw';
import ex7Statement from '../exercises/ex-07/statement.md?raw';
import ex7Starter from '../exercises/ex-07/starter.py?raw';
import ex7Tests from '../exercises/ex-07/tests.py?raw';
import ex8Statement from '../exercises/ex-08/statement.md?raw';
import ex8Starter from '../exercises/ex-08/starter.py?raw';
import ex8Tests from '../exercises/ex-08/tests.py?raw';
import ex9Statement from '../exercises/ex-09/statement.md?raw';
import ex9Starter from '../exercises/ex-09/starter.py?raw';
import ex9Tests from '../exercises/ex-09/tests.py?raw';
import ex10Statement from '../exercises/ex-10/statement.md?raw';
import ex10Starter from '../exercises/ex-10/starter.py?raw';
import ex10Tests from '../exercises/ex-10/tests.py?raw';

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
  {
    id: 'module-5',
    title: 'Module 5 — Chaînes et formatage',
    description: 'Méthodes des chaînes, slicing et f-strings (comme dans la formation Udemy).',
    lessons: [
      { id: '5-1', title: 'Les méthodes des chaînes', content: lesson5a },
      { id: '5-2', title: 'Slicing et f-strings', content: lesson5b },
    ],
    exercises: [
      { id: 'ex-05', title: 'Formater un prix', moduleId: 'module-5', statement: ex5Statement, starter: ex5Starter, tests: ex5Tests },
    ],
  },
  {
    id: 'module-6',
    title: 'Module 6 — Listes avancées',
    description: 'Méthodes de listes, copie et compréhensions de listes.',
    lessons: [
      { id: '6-1', title: 'Les méthodes des listes', content: lesson6a },
      { id: '6-2', title: 'Compréhensions de listes', content: lesson6b },
    ],
    exercises: [
      { id: 'ex-06', title: 'Carrés des nombres pairs', moduleId: 'module-6', statement: ex6Statement, starter: ex6Starter, tests: ex6Tests },
    ],
  },
  {
    id: 'module-7',
    title: 'Module 7 — Dictionnaires, tuples, ensembles',
    description: 'Les autres structures de données de Python.',
    lessons: [
      { id: '7-1', title: 'Les dictionnaires', content: lesson7a },
      { id: '7-2', title: 'Tuples et ensembles', content: lesson7b },
    ],
    exercises: [
      { id: 'ex-07', title: 'Compter les lettres', moduleId: 'module-7', statement: ex7Statement, starter: ex7Starter, tests: ex7Tests },
    ],
  },
  {
    id: 'module-8',
    title: 'Module 8 — Gestion des erreurs',
    description: 'try / except, raise et exceptions personnalisées pour un code robuste.',
    lessons: [
      { id: '8-1', title: 'try / except / else / finally', content: lesson8a },
      { id: '8-2', title: 'Plusieurs except et raise', content: lesson8b },
    ],
    exercises: [
      { id: 'ex-08', title: 'Division sécurisée', moduleId: 'module-8', statement: ex8Statement, starter: ex8Starter, tests: ex8Tests },
    ],
  },
  {
    id: 'module-9',
    title: 'Module 9 — Fonctions avancées',
    description: '*args, **kwargs, portée, docstrings et annotations de type.',
    lessons: [
      { id: '9-1', title: '*args, **kwargs et retours multiples', content: lesson9a },
      { id: '9-2', title: 'Portée, docstrings, annotations', content: lesson9b },
    ],
    exercises: [
      { id: 'ex-09', title: 'Moyenne avec *args', moduleId: 'module-9', statement: ex9Statement, starter: ex9Starter, tests: ex9Tests },
    ],
  },
  {
    id: 'module-10',
    title: 'Module 10 — Programmation orientée objet',
    description: 'Classes, objets, héritage et polymorphisme : la POO en Python.',
    lessons: [
      { id: '10-1', title: 'Classes et objets', content: lesson10a },
      { id: '10-2', title: 'Héritage et polymorphisme', content: lesson10b },
    ],
    exercises: [
      { id: 'ex-10', title: 'La classe Chien', moduleId: 'module-10', statement: ex10Statement, starter: ex10Starter, tests: ex10Tests },
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
