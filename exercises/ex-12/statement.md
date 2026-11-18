## Objectif

Créer une **classe abstraite** `Forme` et une classe `Carre` qui en hérite :

- `Forme` hérite de `ABC` et déclare une méthode abstraite `aire()`
- `Carre(Forme)` possède un attribut `cote` et implémente `aire()` (retourne `cote ** 2`)

## Vérification

```python
carre = Carre(3)
carre.aire()     # 9
Forme()           # ❌ TypeError : classe abstraite
```

## Indice

```python
from abc import ABC, abstractmethod
```
