## Objectif

Écrire un **décorateur** `majuscule` qui transforme le résultat d'une fonction en majuscules :

```python
@majuscule
def dire_bonjour():
    return "bonjour"

dire_bonjour()   # "BONJOUR"
```

Le décorateur doit fonctionner avec une fonction qui prend des arguments :

```python
@majuscule
def saluer(prenom):
    return f"bonjour {prenom}"

saluer("alice")   # "BONJOUR ALICE"
```

## Indice

```python
def majuscule(fonction):
    def wrapper(*args, **kwargs):
        return fonction(*args, **kwargs).upper()
    return wrapper
```
