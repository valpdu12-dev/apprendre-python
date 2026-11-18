# Définir des fonctions

Une **fonction** est un bloc de code réutilisable, qu'on « appelle » quand on en a besoin.

## Définir et appeler une fonction

```python
def dire_bonjour():
    print("Bonjour !")

dire_bonjour()   # affiche "Bonjour !"
dire_bonjour()   # réutilisable à l'infini
```

## Fonction avec des paramètres

```python
def dire_bonjour(prenom):
    print("Bonjour " + prenom + " !")

dire_bonjour("Alice")   # Bonjour Alice !
dire_bonjour("Bob")     # Bonjour Bob !
```

## Fonction qui retourne une valeur : return

```python
def carre(n):
    return n * n

resultat = carre(5)
print(resultat)   # 25
```

`return` renvoie une valeur et **termine** la fonction.

## À retenir

> `def` définit une fonction, les paramètres entre parenthèses, et `return` renvoie un résultat.
