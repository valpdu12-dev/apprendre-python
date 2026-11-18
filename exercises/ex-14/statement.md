## Objectif

Écrire une fonction `trouver_nombre(secret, essais)` qui parcourt la liste des `essais` et retourne le **numéro de la tentative gagnante** (en commençant à 1), ou `None` si le secret n'a jamais été proposé.

## Exemples

```python
trouver_nombre(42, [10, 50, 42, 1])   # 3
trouver_nombre(42, [10, 50])         # None
trouver_nombre(7, [7])               # 1
```

## Indice

`for numero, essai in enumerate(essais, start=1):` puis `if essai == secret: return numero`.
