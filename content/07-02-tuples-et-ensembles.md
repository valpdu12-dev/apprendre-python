# Tuples et ensembles

## Les tuples

Un **tuple** ressemble à une liste mais est **immuable** (on ne peut pas le modifier) : `(1, 2, 3)`.

```python
point = (3, 4)
print(point[0])          # 3
# point[0] = 5           # ❌ erreur : immuable
print(len(point))        # 2
x, y = point             # "déballage" (unpacking)
print(x, y)              # 3 4
```

Utilise un tuple pour des données qui ne doivent pas changer (coordonnées, date…).

## Les ensembles (sets)

Un **ensemble** (`set`) est une collection **sans doublon** et **non ordonnée** : `{1, 2, 3}`.

```python
nombres = {1, 2, 2, 3, 3, 3}
print(nombres)           # {1, 2, 3} — les doublons sont supprimés automatiquement

nombres.add(4)           # ajoute un élément
nombres.remove(1)        # supprime un élément
print(2 in nombres)      # True
```

## Opérations ensemblistes

```python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a | b)    # union : {1, 2, 3, 4, 5, 6}
print(a & b)    # intersection : {3, 4}
print(a - b)    # différence : {1, 2}
```

## Convertir

```python
liste = [1, 2, 2, 3]
unique = set(liste)           # {1, 2, 3}
retour = list(unique)         # retour en liste
chaine = "abracadabra"
lettres = set(chaine)         # {'a', 'b', 'r', 'c', 'd'}
```

## À retenir

> Tuple `( )` = immuable, idéal pour des données fixes + unpacking. Set `{ }` = sans doublons, opérations d'ensemble `|` `&` `-`.
