# Lire et écrire des fichiers texte

Python peut lire et écrire des fichiers sur le disque avec `open()`.

## Lire un fichier

```python
with open("mon_fichier.txt", "r", encoding="utf-8") as f:
    contenu = f.read()          # tout le fichier en une chaîne
print(contenu)
```

Autres méthodes de lecture :

```python
with open("mon_fichier.txt", "r", encoding="utf-8") as f:
    lignes = f.readlines()      # liste d'une ligne par élément
```

## Écrire dans un fichier

```python
with open("mon_fichier.txt", "w", encoding="utf-8") as f:
    f.write("Bonjour !\n")      # mode "w" : écrase le fichier

with open("mon_fichier.txt", "a", encoding="utf-8") as f:
    f.write("Une ligne de plus\n")   # mode "a" : ajoute à la fin
```

## Les modes d'ouverture

| Mode | Effet |
|------|-------|
| `"r"` | lecture (erreur si le fichier n'existe pas) |
| `"w"` | écriture (crée ou **écrase**) |
| `"a"` | ajout en fin de fichier (crée si besoin) |

## Le mot-clé `with`

`with open(...)` garantit que le fichier est **fermé automatiquement**, même en cas d'erreur. C'est la bonne pratique.

💡 Dans le bac à sable de cette app, Pyodide fournit un **vrai système de fichiers virtuel** : ce code fonctionne directement dans ton navigateur !

## À retenir

> `open(chemin, mode, encoding="utf-8")` + `with` + `read()`/`write()`. `"w"` écrase, `"a"` ajoute.
