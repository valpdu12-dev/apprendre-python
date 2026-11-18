# Le module random — le nombre mystère

## Générer un nombre aléatoire

Le module `random` (inclus dans Python) génère des nombres aléatoires :

```python
import random

mystere = random.randint(1, 100)   # entier aléatoire entre 1 et 100 inclus
print(mystere)
```

Autres fonctions utiles :

```python
random.random()              # nombre décimal entre 0.0 et 1.0
random.choice(["a", "b"])    # choisit un élément au hasard
random.shuffle(ma_liste)     # mélange la liste sur place
```

## Le principe du jeu du nombre mystère

1. L'ordinateur choisit un nombre secret entre 1 et 100
2. Le joueur propose un nombre avec `input()`
3. On compare et on donne un indice : « trop grand » / « trop petit »
4. On recommence jusqu'à trouver, en comptant les tentatives

```python
import random

mystere = random.randint(1, 100)
proposition = int(input("Devine le nombre (1-100) : "))
if proposition < mystere:
    print("Trop petit !")
elif proposition > mystere:
    print("Trop grand !")
else:
    print("Bravo !")
```

## À retenir

> `random.randint(a, b)` génère un entier entre a et b. `input()` récupère une saisie clavier (convertie avec `int()`).
