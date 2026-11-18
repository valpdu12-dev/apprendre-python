# Les méthodes des listes

Les listes ont des **méthodes** (avec un point) qui modifient la liste en place ou retournent une valeur.

## Ajouter et retirer

```python
fruits = ["pomme", "banane"]
fruits.append("cerise")          # ajoute à la fin
fruits.insert(1, "poire")        # insère à l'index 1
print(fruits)                    # ["pomme", "poire", "banane", "cerise"]

fruits.remove("poire")           # supprime la première occurrence
dernier = fruits.pop()           # retire et retourne le dernier élément
print(dernier)                   # "cerise"
```

## Trier et renverser

```python
nombres = [3, 1, 4, 1, 5]
nombres.sort()                   # trie en place : [1, 1, 3, 4, 5]
nombres.reverse()                # inverse l'ordre
print(sorted(nombres))           # retourne une NOUVELLE liste triée
```

## Rechercher

```python
fruits = ["pomme", "banane", "cerise"]
print(fruits.index("banane"))    # 1
print(fruits.count("pomme"))     # 1
print("cerise" in fruits)        # True
```

## ⚠️ Copier une liste

`liste2 = liste1` ne copie PAS la liste : les deux variables pointent vers la même liste !

```python
a = [1, 2, 3]
b = a
b.append(4)
print(a)   # [1, 2, 3, 4] — modifié aussi !

c = a.copy()      # vraie copie
c = a[:]          # autre façon de copier
d = list(a)       # idem
```

## À retenir

> `append`, `insert`, `remove`, `pop`, `sort`, `reverse`, `index`, `count`… Pour copier : `.copy()` ou `[:]`, jamais `=`.
