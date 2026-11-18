# La boucle de jeu et le compteur de tentatives

## Jouer jusqu'à trouver

On met la saisie dans une boucle `while` qui s'arrête quand on a trouvé :

```python
import random

mystere = random.randint(1, 100)
tentatives = 0
trouve = False

while not trouve:
    proposition = int(input("Devine le nombre (1-100) : "))
    tentatives += 1
    if proposition < mystere:
        print("Trop petit !")
    elif proposition > mystere:
        print("Trop grand !")
    else:
        trouve = True

print(f"Bravo ! Trouvé en {tentatives} tentative(s).")
```

## Une fonction réutilisable

Pour tester ce jeu facilement, on isole la logique dans une fonction qui reçoit les propositions :

```python
def trouver_nombre(secret, essais):
    """Retourne le numéro de la tentative gagnante (à partir de 1),
    ou None si le secret n'a pas été trouvé."""
    for numero, essai in enumerate(essais, start=1):
        if essai == secret:
            return numero
    return None

print(trouver_nombre(42, [10, 50, 42, 1]))   # 3
print(trouver_nombre(42, [10, 50]))         # None
```

## À retenir

> `while not trouve` + compteur = boucle de jeu classique. Isoler la logique dans une fonction la rend testable.
