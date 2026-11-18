## Objectif

Écrire un **générateur** `pairs(n)` qui produit (avec `yield`) tous les nombres pairs compris entre `0` et `n` inclus.

## Exemples

```python
list(pairs(6))    # [0, 2, 4, 6]
list(pairs(3))    # [0, 2]
list(pairs(0))    # [0]
```

## Indice

```python
def pairs(n):
    for i in range(n + 1):
        if i % 2 == 0:
            yield i
```
