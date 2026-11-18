## Objectif

Compléter un mini gestionnaire d'utilisateurs avec **SQLite** (base `:memory:` passée en paramètre) :

- `creer_table(conn)` : crée la table `utilisateurs(id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT, age INTEGER)`
- `ajouter_utilisateur(conn, nom, age)` : insère un utilisateur (requête paramétrée `?`)
- `lister_utilisateurs(conn)` : retourne la liste des utilisateurs triés par nom, sous forme de liste de tuples `(id, nom, age)`

## Vérification

```python
import sqlite3
conn = sqlite3.connect(":memory:")
creer_table(conn)
ajouter_utilisateur(conn, "Bob", 16)
ajouter_utilisateur(conn, "Alice", 15)
lister_utilisateurs(conn)   # [(2, 'Alice', 15), (1, 'Bob', 16)]
```
