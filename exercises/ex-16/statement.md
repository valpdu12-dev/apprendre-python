## Objectif

Écrire une fonction `moyenne_colonne(chemin, colonne)` qui lit un fichier CSV avec `csv.DictReader` et retourne la **moyenne** (float) des valeurs numériques de la `colonne` indiquée.

## Exemple

Avec un fichier `notes.csv` :

```
prenom,note
Alice,14.5
Bob,11
```

```python
moyenne_colonne("notes.csv", "note")   # 12.75
```

## Indice

`float(ligne[colonne])` pour convertir, puis `sum(valeurs) / len(valeurs)`.
