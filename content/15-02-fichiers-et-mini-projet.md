# Lire/écrire des fichiers — la liste de courses persistante

## Écrire et lire un fichier texte

```python
# Écrire
with open("courses.json", "w", encoding="utf-8") as f:
    f.write('{"courses": ["pomme"]}')

# Lire
with open("courses.json", "r", encoding="utf-8") as f:
    contenu = f.read()
print(contenu)
```

`with open(...)` ouvre le fichier et le **ferme automatiquement** (même en cas d'erreur).

## Le mini-projet : liste de courses avec sauvegarde

```python
import json

FICHIER = "courses.json"

def charger():
    try:
        with open(FICHIER, "r", encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        return {"courses": []}

def sauvegarder(data):
    with open(FICHIER, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

data = charger()
data["courses"].append("pain")
sauvegarder(data)
print("Sauvegardé !", data)
```

💡 Dans le **bac à sable** de cette application, Python dispose d'un vrai système de fichiers virtuel : ce code fonctionne directement dans ton navigateur !

## Organisation d'un mini-projet

1. Une constante pour le nom du fichier
2. `charger()` / `sauvegarder()` pour la persistance
3. La logique métier (ajouter, supprimer, afficher)
4. Une boucle `while` avec `input()` pour l'interface

## À retenir

> `open` + `json.dump`/`json.load` = persistance simple. `with` garantit la fermeture du fichier. `FileNotFoundError` gère le premier lancement.
