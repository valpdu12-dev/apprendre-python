# Héritage et polymorphisme

## L'héritage

Une classe peut **hériter** d'une autre classe et récupérer ses attributs et méthodes :

```python
class Animal:
    def __init__(self, nom):
        self.nom = nom

    def parler(self):
        return "L'animal fait un bruit."

class Chien(Animal):                    # Chien hérite de Animal
    def parler(self):                   # on redéfinit (override) la méthode
        return "Wouf !"

class Chat(Animal):
    def parler(self):
        return "Miaou !"

rex = Chien("Rex")
print(rex.nom)          # "Rex" — attribut hérité de Animal
print(rex.parler())     # "Wouf !"
```

## super() : appeler le parent

```python
class Chien(Animal):
    def __init__(self, nom, race):
        super().__init__(nom)   # appelle le __init__ de Animal
        self.race = race

rex = Chien("Rex", "Berger")
print(rex.nom, rex.race)    # "Rex Berger"
```

## Le polymorphisme

Des objets de classes différentes peuvent répondre **à la même méthode** de façon différente :

```python
animaux = [Chien("Rex"), Chat("Felix"), Animal("Bête")]
for a in animaux:
    print(a.nom, "dit :", a.parler())
# Rex dit : Wouf !
# Felix dit : Miaou !
# Bête dit : L'animal fait un bruit.
```

## isinstance

```python
print(isinstance(rex, Chien))    # True
print(isinstance(rex, Animal))   # True aussi (héritage)
```

## À retenir

> `class Enfant(Parent)` = héritage. `super().__init__(...)` appelle le constructeur parent. Le polymorphisme permet d'appeler la même méthode sur des objets différents.
