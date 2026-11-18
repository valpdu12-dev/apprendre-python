# Dataclasses et méthodes spéciales

## Les dataclasses

Une **dataclass** génère automatiquement `__init__`, `__repr__` et `__eq__` — parfait pour les objets qui ne font que stocker des données :

```python
from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

p1 = Point(1, 2)
p2 = Point(1, 2)
print(p1)            # Point(x=1, y=2)  (repr automatique)
print(p1 == p2)      # True             (égalité automatique)
```

## Les méthodes spéciales (magic methods)

Ce sont des méthodes encadrées par `__` que Python appelle automatiquement :

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):                     # représentation pour le débogage
        return f"Point({self.x}, {self.y})"

    def __add__(self, autre):               # définit l'opérateur +
        return Point(self.x + autre.x, self.y + autre.y)

    def __eq__(self, autre):                # définit l'opérateur ==
        return self.x == autre.x and self.y == autre.y

p1 = Point(1, 2)
p2 = Point(3, 4)
print(p1 + p2)       # Point(4, 6)
print(p1 == Point(1, 2))   # True
```

Autres méthodes utiles : `__str__` (affichage avec `print`), `__len__`, `__lt__` (comparaison `<`)…

## À retenir

> `@dataclass` pour les objets "données". `__add__`, `__eq__`, `__repr__`… pour rendre les objets utilisables avec les opérateurs usuels.
