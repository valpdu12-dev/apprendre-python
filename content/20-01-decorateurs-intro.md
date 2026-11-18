# Les décorateurs — introduction

Un **décorateur** est une fonction qui **modifie le comportement d'une autre fonction** sans changer son code.

## Les fonctions sont des objets

En Python, une fonction peut être passée en argument et retournée :

```python
def saluer():
    return "Bonjour"

f = saluer        # f fait référence à la fonction
print(f())        # "Bonjour"
```

## Une fonction qui retourne une fonction

```python
def fabriquer_salutation(prenom):
    def saluer():
        return f"Bonjour {prenom} !"
    return saluer

s = fabriquer_salutation("Alice")
print(s())        # "Bonjour Alice !"
```

## Le décorateur avec @

```python
def ajouter_exclamation(fonction):
    def wrapper():
        return fonction() + " !"
    return wrapper

@ajouter_exclamation
def dire_bonjour():
    return "Bonjour"

print(dire_bonjour())     # "Bonjour !"
# équivaut à : dire_bonjour = ajouter_exclamation(dire_bonjour)
```

## Un décorateur avec arguments

```python
def repeter(n):
    def decorateur(fonction):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                resultat = fonction(*args, **kwargs)
            return resultat
        return wrapper
    return decorateur

@repeter(3)
def dire_oui():
    print("oui")

dire_oui()    # affiche "oui" 3 fois
```

## À retenir

> Un décorateur prend une fonction, retourne une fonction `wrapper` qui l'appelle. `@decorateur` au-dessus de `def`. `*args, **kwargs` pour transmettre les arguments.
