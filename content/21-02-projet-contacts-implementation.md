# Mini-projet : gestionnaire de contacts — implémentation

Voici l'implémentation complète, à comprendre étape par étape :

```python
import sqlite3

class GestionnaireContacts:
    def __init__(self, chemin="contacts.db"):
        self.conn = sqlite3.connect(chemin)
        self._creer_table()

    def _creer_table(self):
        cur = self.conn.cursor()
        cur.execute("""CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL,
            telephone TEXT
        )""")
        self.conn.commit()

    def ajouter(self, nom, telephone):
        cur = self.conn.cursor()
        cur.execute("INSERT INTO contacts (nom, telephone) VALUES (?, ?)",
                    (nom, telephone))
        self.conn.commit()
        return cur.lastrowid

    def lister(self):
        cur = self.conn.cursor()
        cur.execute("SELECT id, nom, telephone FROM contacts ORDER BY nom")
        return cur.fetchall()

    def supprimer(self, id_contact):
        cur = self.conn.cursor()
        cur.execute("DELETE FROM contacts WHERE id = ?", (id_contact,))
        self.conn.commit()

    def rechercher(self, nom):
        cur = self.conn.cursor()
        cur.execute("SELECT id, nom, telephone FROM contacts WHERE nom LIKE ?",
                    (f"%{nom}%",))
        return cur.fetchall()

    def fermer(self):
        self.conn.close()
```

## Utilisation

```python
g = GestionnaireContacts("contacts.db")   # le fichier est créé si besoin
g.ajouter("Alice", "0601020304")
g.ajouter("Bob", "0605060708")
print(g.lister())                          # [(1, 'Alice', ...), (2, 'Bob', ...)]
print(g.rechercher("Ali"))                 # [(1, 'Alice', ...)]
g.supprimer(2)
g.fermer()
```

💡 Teste ce code dans le **bac à sable** : Pyodide fournit un vrai fichier virtuel `contacts.db`.

## Prolongements possibles

- Ajouter un menu interactif avec `input()`
- Ajouter un champ email, valider le numéro de téléphone
- Exporter la liste en CSV

## À retenir

> `CREATE TABLE IF NOT EXISTS` rend le code réexécutable. `lastrowid` donne l'id inséré. `LIKE %...%` fait une recherche partielle.
