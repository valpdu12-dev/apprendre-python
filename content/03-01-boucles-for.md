# La boucle for

Une boucle **répète** un bloc de code. `for` parcourt une séquence (une plage de nombres, une liste…).

## Parcourir une plage de nombres

`range(n)` génère les nombres de `0` à `n-1` :

```python
for i in range(5):
    print(i)   # affiche 0, 1, 2, 3, 4
```

## range avec début et fin

```python
for i in range(2, 6):
    print(i)   # affiche 2, 3, 4, 5
```

## range avec un pas

```python
for i in range(0, 10, 2):
    print(i)   # affiche 0, 2, 4, 6, 8
```

## Boucle for sur une liste

```python
fruits = ["pomme", "banane", "cerise"]
for fruit in fruits:
    print("J'aime la " + fruit)
```

## À retenir

> `for ... in range(...)` répète avec un compteur. `for ... in liste` parcourt chaque élément.
