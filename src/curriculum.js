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
import lesson11a from '../content/11-01-dataclasses-et-methodes-speciales.md?raw';
import lesson11b from '../content/11-02-property-classmethod-staticmethod.md?raw';
import lesson12a from '../content/12-01-heritage-multiple-et-mro.md?raw';
import lesson12b from '../content/12-02-classes-abstraites-et-composition.md?raw';
import lesson13a from '../content/13-01-tests-unitaires-unittest.md?raw';
import lesson13b from '../content/13-02-bonnes-pratiques-tests.md?raw';
import lesson14a from '../content/14-01-module-random-nombre-mystere.md?raw';
import lesson14b from '../content/14-02-boucle-de-jeu-et-tentatives.md?raw';
import lesson15a from '../content/15-01-module-json.md?raw';
import lesson15b from '../content/15-02-fichiers-et-mini-projet.md?raw';
import lesson16a from '../content/16-01-fichiers-texte.md?raw';
import lesson16b from '../content/16-02-module-csv.md?raw';
import lesson17a from '../content/17-01-module-datetime.md?raw';
import lesson17b from '../content/17-02-timedelta-et-formatage.md?raw';
import lesson18a from '../content/18-01-sqlite-intro.md?raw';
import lesson18b from '../content/18-02-sqlite-requetes.md?raw';
import lesson19a from '../content/19-01-lambda-map-filter.md?raw';
import lesson19b from '../content/19-02-generateurs-et-yield.md?raw';
import lesson20a from '../content/20-01-decorateurs-intro.md?raw';
import lesson20b from '../content/20-02-wraps-et-usages.md?raw';

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
import ex11Statement from '../exercises/ex-11/statement.md?raw';
import ex11Starter from '../exercises/ex-11/starter.py?raw';
import ex11Tests from '../exercises/ex-11/tests.py?raw';
import ex12Statement from '../exercises/ex-12/statement.md?raw';
import ex12Starter from '../exercises/ex-12/starter.py?raw';
import ex12Tests from '../exercises/ex-12/tests.py?raw';
import ex13Statement from '../exercises/ex-13/statement.md?raw';
import ex13Starter from '../exercises/ex-13/starter.py?raw';
import ex13Tests from '../exercises/ex-13/tests.py?raw';
import ex14Statement from '../exercises/ex-14/statement.md?raw';
import ex14Starter from '../exercises/ex-14/starter.py?raw';
import ex14Tests from '../exercises/ex-14/tests.py?raw';
import ex15Statement from '../exercises/ex-15/statement.md?raw';
import ex15Starter from '../exercises/ex-15/starter.py?raw';
import ex15Tests from '../exercises/ex-15/tests.py?raw';
import ex16Statement from '../exercises/ex-16/statement.md?raw';
import ex16Starter from '../exercises/ex-16/starter.py?raw';
import ex16Tests from '../exercises/ex-16/tests.py?raw';
import ex17Statement from '../exercises/ex-17/statement.md?raw';
import ex17Starter from '../exercises/ex-17/starter.py?raw';
import ex17Tests from '../exercises/ex-17/tests.py?raw';
import ex18Statement from '../exercises/ex-18/statement.md?raw';
import ex18Starter from '../exercises/ex-18/starter.py?raw';
import ex18Tests from '../exercises/ex-18/tests.py?raw';
import ex19Statement from '../exercises/ex-19/statement.md?raw';
import ex19Starter from '../exercises/ex-19/starter.py?raw';
import ex19Tests from '../exercises/ex-19/tests.py?raw';
import ex20Statement from '../exercises/ex-20/statement.md?raw';
import ex20Starter from '../exercises/ex-20/starter.py?raw';
import ex20Tests from '../exercises/ex-20/tests.py?raw';

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
  {
    id: 'module-11',
    title: 'Module 11 — POO avancée : dataclasses et décorateurs',
    description: 'Dataclasses, méthodes spéciales (__add__, __eq__…), @property, @classmethod, @staticmethod.',
    lessons: [
      { id: '11-1', title: 'Dataclasses et méthodes spéciales', content: lesson11a },
      { id: '11-2', title: '@property, @classmethod, @staticmethod', content: lesson11b },
    ],
    exercises: [
      { id: 'ex-11', title: 'Dataclass Point avec __add__', moduleId: 'module-11', statement: ex11Statement, starter: ex11Starter, tests: ex11Tests },
    ],
  },
  {
    id: 'module-12',
    title: 'Module 12 — Héritage multiple, ABC et composition',
    description: 'MRO, super() chaîné, classes abstraites (ABC) et composition vs héritage.',
    lessons: [
      { id: '12-1', title: 'Héritage multiple et MRO', content: lesson12a },
      { id: '12-2', title: 'Classes abstraites et composition', content: lesson12b },
    ],
    exercises: [
      { id: 'ex-12', title: 'Classe abstraite Forme et Carre', moduleId: 'module-12', statement: ex12Statement, starter: ex12Starter, tests: ex12Tests },
    ],
  },
  {
    id: 'module-13',
    title: 'Module 13 — Tests unitaires',
    description: 'Écrire et exécuter des tests unitaires avec unittest : TestCase, assertions, setUp, assertRaises.',
    lessons: [
      { id: '13-1', title: 'Tests unitaires avec unittest', content: lesson13a },
      { id: '13-2', title: 'Bonnes pratiques des tests', content: lesson13b },
    ],
    exercises: [
      { id: 'ex-13', title: 'Écrire des tests unitaires', moduleId: 'module-13', statement: ex13Statement, starter: ex13Starter, tests: ex13Tests },
    ],
  },
  {
    id: 'module-14',
    title: 'Module 14 — Mini-projet CLI : le nombre mystère',
    description: 'Le module random, les boucles de jeu avec input() et le compteur de tentatives.',
    lessons: [
      { id: '14-1', title: 'random et le nombre mystère', content: lesson14a },
      { id: '14-2', title: 'Boucle de jeu et tentatives', content: lesson14b },
    ],
    exercises: [
      { id: 'ex-14', title: 'Logique du nombre mystère', moduleId: 'module-14', statement: ex14Statement, starter: ex14Starter, tests: ex14Tests },
    ],
  },
  {
    id: 'module-15',
    title: 'Module 15 — Mini-projet CLI : liste de courses JSON',
    description: 'Persister des données avec le module json et les fichiers (système de fichiers virtuel Pyodide).',
    lessons: [
      { id: '15-1', title: 'Le module json', content: lesson15a },
      { id: '15-2', title: 'Fichiers et mini-projet', content: lesson15b },
    ],
    exercises: [
      { id: 'ex-15', title: 'Sauvegarde JSON d\'une liste de courses', moduleId: 'module-15', statement: ex15Statement, starter: ex15Starter, tests: ex15Tests },
    ],
  },
  {
    id: 'module-16',
    title: 'Module 16 — Fichiers texte et CSV',
    description: 'Lire/écrire des fichiers, et manipuler des CSV avec le module csv.',
    lessons: [
      { id: '16-1', title: 'Lire et écrire des fichiers texte', content: lesson16a },
      { id: '16-2', title: 'Le module csv', content: lesson16b },
    ],
    exercises: [
      { id: 'ex-16', title: 'Moyenne d\'une colonne CSV', moduleId: 'module-16', statement: ex16Statement, starter: ex16Starter, tests: ex16Tests },
    ],
  },
  {
    id: 'module-17',
    title: 'Module 17 — Dates et heures (datetime)',
    description: 'Manipuler les dates : création, calculs avec timedelta, formatage strftime/strptime.',
    lessons: [
      { id: '17-1', title: 'Les dates avec datetime', content: lesson17a },
      { id: '17-2', title: 'timedelta et formatage', content: lesson17b },
    ],
    exercises: [
      { id: 'ex-17', title: 'Jours entre deux dates', moduleId: 'module-17', statement: ex17Statement, starter: ex17Starter, tests: ex17Tests },
    ],
  },
  {
    id: 'module-18',
    title: 'Module 18 — Bases de données SQLite',
    description: 'Créer une base, des tables, insérer et interroger des données en SQL avec sqlite3.',
    lessons: [
      { id: '18-1', title: 'SQLite : connexion et création de table', content: lesson18a },
      { id: '18-2', title: 'SELECT, UPDATE, DELETE', content: lesson18b },
    ],
    exercises: [
      { id: 'ex-18', title: 'Gestionnaire d\'utilisateurs SQLite', moduleId: 'module-18', statement: ex18Statement, starter: ex18Starter, tests: ex18Tests },
    ],
  },
  {
    id: 'module-19',
    title: 'Module 19 — Lambda, map, filter et générateurs',
    description: 'Fonctions anonymes, map/filter, générateurs avec yield et compréhensions dict/set.',
    lessons: [
      { id: '19-1', title: 'lambda, map, filter', content: lesson19a },
      { id: '19-2', title: 'Générateurs (yield)', content: lesson19b },
    ],
    exercises: [
      { id: 'ex-19', title: 'Générateur de nombres pairs', moduleId: 'module-19', statement: ex19Statement, starter: ex19Starter, tests: ex19Tests },
    ],
  },
  {
    id: 'module-20',
    title: 'Module 20 — Les décorateurs',
    description: 'Décorateurs @, wrapper, *args/**kwargs, functools.wraps, lru_cache et cas d\'usage.',
    lessons: [
      { id: '20-1', title: 'Introduction aux décorateurs', content: lesson20a },
      { id: '20-2', title: '@wraps, lru_cache et usages', content: lesson20b },
    ],
    exercises: [
      { id: 'ex-20', title: 'Le décorateur @majuscule', moduleId: 'module-20', statement: ex20Statement, starter: ex20Starter, tests: ex20Tests },
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
