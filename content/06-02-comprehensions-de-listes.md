# Les compréhensions de listes

Une **compréhension de liste** permet de créer une liste en une seule ligne, de façon élégante.

## La syntaxe de base

```python
# Créer la liste [0, 1, 4, 9, 16] (les carrés)
carres = [n * n for n in range(5)]
print(carres)   # [0, 1, 4, 9, 16]
```

Forme générale : `[expression for élément in séquence]`

## Avec une condition (filtrer)

```python
# Nombres pairs entre 0 et 9
pairs = [n for n in range(10) if n % 2 == 0]
print(pairs)   # [0, 2, 4, 6, 8]
```

## Exemples concrets

```python
mots = ["pomme", "kiwi", "banane"]
longs = [m for m in mots if len(m) > 4]        # ["pomme", "banane"]
majuscules = [m.upper() for m in mots]         # ["POMME", "KIWI", "BANANE"]
```

## Le slicing de listes

Comme les chaînes, on peut découper une liste :

```python
nombres = [0, 1, 2, 3, 4, 5]
print(nombres[1:4])    # [1, 2, 3]
print(nombres[::2])    # [0, 2, 4]
print(nombres[::-1])   # liste inversée : [5, 4, 3, 2, 1, 0]
```

## À retenir

> `[expr for x in seq]` crée une liste, `if` filtre. Les compréhensions rendent le code plus court et plus lisible.
