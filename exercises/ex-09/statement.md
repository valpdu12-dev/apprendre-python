## Objectif

Écrire une fonction `moyenne(*notes)` qui accepte un **nombre variable d'arguments** (`*args`) et retourne leur moyenne.

Si aucune note n'est fournie, retourner `0`.

## Exemples

```python
moyenne(10, 12, 14)   # 12.0
moyenne(8, 16)        # 12.0
moyenne()             # 0
```

## Indice

`*notes` est un tuple dans la fonction : `sum(notes) / len(notes)`.
