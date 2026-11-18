# Fonctions avancées : *args et **kwargs

## Valeurs par défaut

```python
def saluer(prenom, ponctuation=" !"):
    return "Bonjour " + prenom + ponctuation

print(saluer("Alice"))        # "Bonjour Alice !"
print(saluer("Bob", " ?"))    # "Bonjour Bob ?"
```

## *args : un nombre variable d'arguments

```python
def somme(*nombres):
    total = 0
    for n in nombres:
        total += n
    return total

print(somme(1, 2, 3))       # 6
print(somme(10, 20))        # 30
print(somme())              # 0
```

`*nombres` devient un **tuple** dans la fonction.

## **kwargs : des arguments nommés variables

```python
def afficher_infos(**infos):
    for cle, valeur in infos.items():
        print(f"{cle} : {valeur}")

afficher_infos(prenom="Alice", age=15, ville="Paris")
# prenom : Alice
# age : 15
# ville : Paris
```

`**infos` devient un **dictionnaire** dans la fonction.

## Retourner plusieurs valeurs

```python
def stats(notes):
    return min(notes), max(notes), sum(notes) / len(notes)

minimum, maximum, moyenne = stats([12, 15, 9])
print(moyenne)   # 12.0
```

`return a, b, c` retourne en réalité un **tuple**.

## À retenir

> `*args` = tuple d'arguments positionnels, `**kwargs` = dict d'arguments nommés, `return a, b` = tuple (unpacking à la réception).
