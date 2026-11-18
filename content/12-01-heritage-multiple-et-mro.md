# Héritage multiple et MRO

## Héritage multiple

Une classe peut hériter de **plusieurs classes** :

```python
class A:
    def saluer(self):
        return "Bonjour depuis A"

class B:
    def saluer(self):
        return "Bonjour depuis B"

class C(A, B):
    pass

c = C()
print(c.saluer())    # "Bonjour depuis A" — A est prioritaire
```

## La MRO (Method Resolution Order)

Python cherche les méthodes dans un ordre précis, visible avec `__mro__` ou `mro()` :

```python
print(C.__mro__)
# (C, A, B, object)
```

L'ordre suit l'algorithme **C3** : la classe elle-même, puis les parents de gauche à droite, puis `object`.

## super() avec l'héritage multiple

`super()` suit la MRO : chaque classe peut appeler `super().__init__()` pour chaîner les constructeurs :

```python
class A:
    def __init__(self):
        super().__init__()
        self.a = "A"

class B:
    def __init__(self):
        super().__init__()
        self.b = "B"

class C(A, B):
    def __init__(self):
        super().__init__()
        self.c = "C"

c = C()
print(c.a, c.b, c.c)   # A B C — chaque __init__ a été appelé grâce à super()
```

## ⚠️ Le losange

L'héritage multiple forme parfois un « losange » ; la MRO de Python garantit que chaque classe n'est appelée **qu'une fois**. Préfère la **composition** quand l'héritage devient confus.

## À retenir

> Héritage multiple = plusieurs parents. `C.__mro__` donne l'ordre de recherche. `super()` chaîné fonctionne grâce à la MRO.
