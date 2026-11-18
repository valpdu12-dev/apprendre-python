## Objectif

Écrire une fonction `carres_pairs(n)` qui retourne la liste des **carrés des nombres pairs** compris entre `0` et `n` inclus, en utilisant une **compréhension de liste**.

## Exemples

```python
carres_pairs(6)   # [0, 4, 16, 36]  (0², 2², 4², 6²)
carres_pairs(3)   # [0, 4]          (0², 2²)
```

## Indice

`[x * x for x in range(n + 1) if x % 2 == 0]`
