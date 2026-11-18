## Objectif

Écrire deux fonctions pour gérer le **record d'un quiz** dans un fichier JSON :

- `lire_record(chemin)` : retourne le record stocké, ou `0` si le fichier n'existe pas
- `enregistrer_record(score, chemin)` : écrit le score dans le fichier **uniquement s'il est strictement supérieur** au record actuel ; retourne `True` si nouveau record, `False` sinon

## Exemple

```python
lire_record("record.json")          # 0 (fichier inexistant)
enregistrer_record(3, "record.json")  # True  (3 > 0)
enregistrer_record(2, "record.json")  # False (2 < 3)
enregistrer_record(5, "record.json")  # True  (5 > 3)
lire_record("record.json")            # 5
```

## Indice

`json.load` / `json.dump({"record": score}, ...)` + `try/except FileNotFoundError`.
