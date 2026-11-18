# Générateurs, yield et autres compréhensions

## Un générateur avec yield

Un **générateur** produit des valeurs **à la demande**, une par une, sans tout stocker en mémoire :

```python
def compteur(n):
    i = 0
    while i < n:
        yield i          # produit la valeur et met la fonction en pause
        i += 1

for nombre in compteur(3):
    print(nombre)        # 0, 1, 2

print(list(compteur(5)))   # [0, 1, 2, 3, 4]
```

`yield` retourne une valeur et **reprend** la fonction là où elle s'était arrêtée à l'appel suivant.

## Générateur d'évidence : les nombres pairs

```python
def pairs(n):
    for i in range(n + 1):
        if i % 2 == 0:
            yield i

print(list(pairs(6)))   # [0, 2, 4, 6]
```

## Expressions génératrices

Comme une compréhension de liste, mais avec `()` → évaluée à la demande :

```python
carres = (x * x for x in range(5))
print(next(carres))     # 0
print(list(carres))     # [1, 4, 9, 16]
```

## Compréhensions de dictionnaires et d'ensembles

```python
carres = {x: x * x for x in range(5)}     # {0: 0, 1: 1, 4: 4, ...}
doublons = {x for x in [1, 2, 2, 3]}      # {1, 2, 3}
```

## À retenir

> `yield` = générateur paresseux (mémoire efficace). `(expr for x in seq)` = expression génératrice. `{k: v for ...}` et `{x for ...}` = compréhensions dict/set.
