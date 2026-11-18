# Classes abstraites (ABC) et composition

## Les classes abstraites

Une **classe abstraite** définit un contrat : elle ne peut pas être instanciée directement, et ses sous-classes doivent implémenter ses méthodes abstraites.

```python
from abc import ABC, abstractmethod

class Forme(ABC):
    @abstractmethod
    def aire(self):
        pass

class Carre(Forme):
    def __init__(self, cote):
        self.cote = cote

    def aire(self):
        return self.cote ** 2

carre = Carre(3)
print(carre.aire())     # 9

# forme = Forme()       # ❌ TypeError : classe abstraite, impossible à instancier
```

Si une sous-classe n'implémente pas `aire`, elle aussi devient abstraite et ne peut pas être instanciée.

## La composition (alternative à l'héritage)

« Avoir un » plutôt que « être un » : un objet contient d'autres objets.

```python
class Moteur:
    def demarrer(self):
        return "Moteur démarré"

class Voiture:
    def __init__(self):
        self.moteur = Moteur()      # la Voiture A un Moteur (composition)

    def demarrer(self):
        return self.moteur.demarrer()

v = Voiture()
print(v.demarrer())    # "Moteur démarré"
```

## Héritage ou composition ?

- **Héritage** (`est un`) : `Chien` est un `Animal`
- **Composition** (`a un`) : `Voiture` a un `Moteur`

Préfère la composition quand la relation n'est pas évidente — le code est plus simple et moins couplé.

## À retenir

> `ABC` + `@abstractmethod` = contrat à respecter. Composition = contenir d'autres objets (`self.x = AutreClasse()`).
