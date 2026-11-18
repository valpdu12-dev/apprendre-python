# lambda, map et filter

## Les fonctions lambda (anonymes)

Une **lambda** est une petite fonction sur une ligne :

```python
carre = lambda x: x * x
print(carre(5))     # 25

# Équivalent à :
def carre(x):
    return x * x
```

Syntaxe : `lambda arguments: expression`

## map : appliquer une fonction à chaque élément

```python
nombres = [1, 2, 3, 4]
doublés = list(map(lambda x: x * 2, nombres))
print(doublés)      # [2, 4, 6, 8]
```

## filter : garder certains éléments

```python
nombres = [1, 2, 3, 4, 5, 6]
pairs = list(filter(lambda x: x % 2 == 0, nombres))
print(pairs)        # [2, 4, 6]
```

## sorted avec une clé (key)

```python
mots = ["banane", "kiwi", "pomme"]
print(sorted(mots, key=len))              # ["kiwi", "pomme", "banane"]
print(sorted(mots, key=lambda m: m[-1]))  # tri par dernière lettre
```

## ⚠️ Lambda ou boucle ?

Les lambda sont pratiques pour une opération simple et ponctuelle. Pour quelque chose de plus complexe, une vraie fonction `def` est plus lisible.

## À retenir

> `lambda x: expr` = fonction anonyme. `map(f, liste)` transforme, `filter(f, liste)` filtre, `sorted(liste, key=f)` trie selon f.
