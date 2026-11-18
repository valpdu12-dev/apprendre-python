## Objectif

Créer une **dataclass** `Point` avec :

- deux attributs `x` et `y` (entiers)
- une méthode spéciale `__add__` permettant d'additionner deux points avec `+` (les coordonnées s'additionnent une à une)

La dataclass fournit automatiquement `__init__`, `__repr__` et `__eq__`.

## Exemples

```python
p1 = Point(1, 2)
p2 = Point(3, 4)
p3 = p1 + p2
p3.x        # 4
p3.y        # 6
p1 == Point(1, 2)   # True
```

## Indice

```python
from dataclasses import dataclass
```
