# Mini-projet : gestionnaire de contacts — cahier des charges

On va construire un **gestionnaire de contacts** complet, persistant grâce à SQLite.

## Cahier des charges

L'application doit permettre de :

1. **Ajouter** un contact (nom, téléphone)
2. **Lister** tous les contacts
3. **Supprimer** un contact par son id
4. **Rechercher** un contact par nom
5. Conserver les données **entre deux exécutions** (base SQLite dans un fichier)

## Architecture proposée

Une classe `GestionnaireContacts` qui encapsule tout :

```python
import sqlite3

class GestionnaireContacts:
    def __init__(self, chemin="contacts.db"):
        self.conn = sqlite3.connect(chemin)
        self._creer_table()

    def _creer_table(self):
        ...

    def ajouter(self, nom, telephone):
        ...

    def lister(self):
        ...

    def supprimer(self, id_contact):
        ...

    def rechercher(self, nom):
        ...

    def fermer(self):
        self.conn.close()
```

## Pourquoi une classe ?

La classe regroupe la connexion et toutes les opérations : c'est de la **POO appliquée**, plus propre qu'un script avec des fonctions globales.

## À retenir

> Un mini-projet = cahier des charges clair + une classe qui encapsule la base + des méthodes CRUD (Create, Read, Update, Delete).
