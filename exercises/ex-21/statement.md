## Objectif

Implémenter une classe `GestionnaireContacts` avec SQLite (base passée via `sqlite3.connect(":memory:")` dans les tests) :

- `__init__(self, conn)` : stocke la connexion et crée la table `contacts(id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT, telephone TEXT)` si elle n'existe pas
- `ajouter(self, nom, telephone)` : insère et retourne l'id (avec `lastrowid`)
- `lister(self)` : retourne tous les contacts triés par nom
- `supprimer(self, id_contact)` : supprime le contact

## Vérification

```python
import sqlite3
g = GestionnaireContacts(sqlite3.connect(":memory:"))
g.ajouter("Bob", "0602")
g.ajouter("Alice", "0601")
g.lister()        # [(2, 'Alice', '0601'), (1, 'Bob', '0602')]
```
