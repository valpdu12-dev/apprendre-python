## Objectif

Écrire une fonction `compter_lettres(texte)` qui retourne un **dictionnaire** indiquant combien de fois chaque lettre apparaît dans `texte` (les espaces et la ponctuation sont ignorés, et tout est compté en minuscules).

## Exemple

```python
compter_lettres("aab")   # {"a": 2, "b": 1}
compter_lettres("Bonjour")  # {"b": 1, "o": 2, "n": 1, "j": 1, "u": 1, "r": 1}
```

## Indice

Parcours chaque caractère avec `for c in texte.lower():`, ignore ceux qui ne sont pas alphabétiques (`c.isalpha()`), puis utilise `dico[c] = dico.get(c, 0) + 1`.
