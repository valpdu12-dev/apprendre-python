# 🐍 Apprendre Python

Application interactive pour apprendre à coder en Python :

- **Cours** en Markdown rendus dans l'application
- **Exercices** avec éditeur de code, exécution et correction automatique par tests
- **Bac à sable** pour coder librement

Le code Python s'exécute **dans le navigateur** grâce à [Pyodide](https://pyodide.org) (Python en WebAssembly) : aucun serveur Python requis.

## Développement local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build   # génère le dossier dist/
```

## Déploiement sur Cloudflare Pages

1. Sur [dash.cloudflare.com](https://dash.cloudflare.com), va dans **Workers & Pages → Create application → Pages → Connect to Git**.
2. Sélectionne ce dépôt GitHub.
3. Paramètres de build :
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
4. Enregistre : chaque `push` sur `main` déploie automatiquement le site.

## Structure

```
content/     ← cours (Markdown, un fichier par leçon)
exercises/   ← exercices (statement.md + starter.py + tests.py)
src/         ← application (routeur, pages, exécution Pyodide)
```

## Ajouter du contenu

- **Un cours** : ajoute un fichier `.md` dans `content/` et référence-le dans `src/curriculum.js`.
- **Un exercice** : crée `exercises/ex-XX/` avec `statement.md`, `starter.py`, `tests.py`, puis déclare-le dans `src/curriculum.js`. Les tests utilisent `_check("nom", lambda: ...)`.
