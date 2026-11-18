# Classes et objets (POO)

La **programmation orientée objet** (POO) consiste à modéliser des objets du monde réel avec des **classes**.

## Créer une classe

```python
class Chien:
    def __init__(self, nom, age):
        self.nom = nom      # attribut
        self.age = age      # attribut

    def aboyer(self):       # méthode
        return "Wouf !"

    def presenter(self):
        return f"Je m'appelle {self.nom} et j'ai {self.age} ans."
```

## Créer un objet (instance)

```python
rex = Chien("Rex", 3)
print(rex.nom)              # "Rex"
print(rex.aboyer())         # "Wouf !"
print(rex.presenter())      # "Je m'appelle Rex et j'ai 3 ans."
```

- `__init__` est le **constructeur**, appelé automatiquement à la création
- `self` représente l'objet lui-même

## Plusieurs objets

```python
rex = Chien("Rex", 3)
fido = Chien("Fido", 5)
print(rex.nom)    # "Rex"
print(fido.nom)   # "Fido" — chaque objet a ses propres attributs
```

## Ajouter une méthode qui modifie l'objet

```python
class Chien:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age

    def anniversaire(self):
        self.age += 1
        return f"Joyeux anniversaire {self.nom} ! Tu as {self.age} ans."
```

## À retenir

> `class` définit un modèle. `__init__(self, ...)` initialise l'objet. Les objets sont créés avec `NomClasse(...)` et possèdent leurs propres attributs.
