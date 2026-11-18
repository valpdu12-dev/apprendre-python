# Le module csv

Les fichiers **CSV** (Comma-Separated Values) contiennent des tableaux : une ligne = une donnée, les colonnes séparées par des virgules (ou point-virgule).

Exemple de fichier `notes.csv` :

```
prenom,note
Alice,14.5
Bob,11
```

## Lire un CSV avec DictReader

```python
import csv

with open("notes.csv", "r", encoding="utf-8") as f:
    lecteur = csv.DictReader(f)       # chaque ligne devient un dict
    for ligne in lecteur:
        print(ligne["prenom"], "a eu", ligne["note"])
```

## Lire un CSV simple

```python
import csv

with open("notes.csv", "r", encoding="utf-8") as f:
    for ligne in csv.reader(f):
        print(ligne)    # ["Alice", "14.5"] — liste de chaînes
```

## Écrire un CSV

```python
import csv

with open("sortie.csv", "w", encoding="utf-8", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["prenom", "note"])     # l'en-tête
    writer.writerow(["Alice", 14.5])
```

## Séparateur point-virgule (fichiers français)

```python
csv.reader(f, delimiter=";")
```

## À retenir

> `csv.DictReader` = lignes en dictionnaires (accès par nom de colonne). `csv.writer` pour écrire. `delimiter=";"` pour les CSV français.
