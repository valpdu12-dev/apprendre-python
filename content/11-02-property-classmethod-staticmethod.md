# @property, @classmethod et @staticmethod

## @property : un attribut calculé

Transforme une méthode en **attribut** (sans parenthèses) et permet de valider les valeurs :

```python
class Rectangle:
    def __init__(self, largeur, hauteur):
        self.largeur = largeur
        self.hauteur = hauteur

    @property
    def aire(self):
        return self.largeur * self.hauteur

    @aire.setter
    def aire(self, valeur):
        raise ValueError("L'aire est calculée, on ne peut pas la modifier !")

r = Rectangle(3, 4)
print(r.aire)    # 12 — on utilise aire comme un attribut, sans ()
```

## @classmethod : méthode liée à la classe

Reçoit la **classe** (`cls`) au lieu de l'instance — utile pour des constructeurs alternatifs :

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    @classmethod
    def origine(cls):
        return cls(0, 0)     # crée un Point via la classe

p = Point.origine()
print(p.x, p.y)    # 0 0
```

## @staticmethod : méthode utilitaire

Ni `self` ni `cls` : une simple fonction rangée dans la classe :

```python
class Convertisseur:
    @staticmethod
    def celsius_vers_fahrenheit(c):
        return c * 9 / 5 + 32

print(Convertisseur.celsius_vers_fahrenheit(100))   # 212.0
```

## À retenir

> `@property` = attribut calculé. `@classmethod` reçoit `cls` (constructeurs alternatifs). `@staticmethod` = fonction utilitaire sans état.
