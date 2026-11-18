# SQLite — SELECT, UPDATE, DELETE

## Lire des données : SELECT

```python
import sqlite3

conn = sqlite3.connect(":memory:")
curseur = conn.cursor()
curseur.execute("CREATE TABLE utilisateurs (id INTEGER PRIMARY KEY, nom TEXT, age INTEGER)")
curseur.execute("INSERT INTO utilisateurs (nom, age) VALUES (?, ?)", ("Alice", 15))
curseur.execute("INSERT INTO utilisateurs (nom, age) VALUES (?, ?)", ("Bob", 16))
conn.commit()

curseur.execute("SELECT * FROM utilisateurs")
for ligne in curseur.fetchall():
    print(ligne)          # (1, 'Alice', 15)

# Avec une condition
curseur.execute("SELECT nom FROM utilisateurs WHERE age >= ?", (16,))
print(curseur.fetchall())   # [('Bob',)]

# Trier et limiter
curseur.execute("SELECT * FROM utilisateurs ORDER BY age DESC LIMIT 1")
print(curseur.fetchone())   # (2, 'Bob', 16)
```

## Modifier et supprimer

```python
curseur.execute("UPDATE utilisateurs SET age = ? WHERE nom = ?", (17, "Bob"))
curseur.execute("DELETE FROM utilisateurs WHERE age < 18")
conn.commit()
```

## Fermer proprement

```python
conn.close()
```

## Le pattern complet

```python
conn = sqlite3.connect("ma_base.db")
try:
    ...  # requêtes + commit
finally:
    conn.close()
```

## À retenir

> `SELECT ... WHERE ... ORDER BY ... LIMIT`, `fetchall()`/`fetchone()`, `UPDATE`/`DELETE` + `commit()`, et `?` pour les paramètres.
