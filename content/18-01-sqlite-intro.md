# SQLite — les bases de données

**SQLite** est une base de données complète... dans un seul fichier. Elle est incluse dans Python (`sqlite3`) — aucune installation.

💡 Fonctionne aussi dans le bac à sable de cette app (fichier virtuel ou `:memory:`).

## Se connecter et créer une table

```python
import sqlite3

conn = sqlite3.connect(":memory:")   # base en mémoire (perdue à la fermeture)
# conn = sqlite3.connect("ma_base.db")  # base dans un fichier

curseur = conn.cursor()
curseur.execute("""
    CREATE TABLE utilisateurs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT NOT NULL,
        age INTEGER
    )
""")
conn.commit()    # valide les modifications
```

## Insérer des données (requête paramétrée)

```python
curseur.execute("INSERT INTO utilisateurs (nom, age) VALUES (?, ?)", ("Alice", 15))
curseur.execute("INSERT INTO utilisateurs (nom, age) VALUES (?, ?)", ("Bob", 16))
conn.commit()
```

⚠️ **Toujours utiliser `?` + tuple** : jamais de concaténation de chaînes (risque d'injection SQL).

## À retenir

> `sqlite3.connect(...)` → connexion. `cursor.execute(sql, paramètres)` → requête. `conn.commit()` → valide. `?` = paramètre sécurisé.
