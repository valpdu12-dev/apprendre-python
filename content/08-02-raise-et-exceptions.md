# Plusieurs except et raise

## Gérer plusieurs types d'erreurs

```python
def diviser(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Division par zéro impossible"
    except TypeError:
        return "Les deux valeurs doivent être des nombres"

print(diviser(10, 2))     # 5.0
print(diviser(10, 0))     # "Division par zéro impossible"
print(diviser(10, "2"))   # "Les deux valeurs doivent être des nombres"
```

## Lever soi-même une erreur : raise

`raise` permet de **déclencher** une erreur volontairement (utile pour valider des données) :

```python
def definir_age(age):
    if age < 0:
        raise ValueError("L'âge ne peut pas être négatif !")
    return age

try:
    definir_age(-5)
except ValueError as e:
    print("Erreur attrapée :", e)   # "L'âge ne peut pas être négatif !"
```

`except ... as e` récupère le message de l'erreur dans la variable `e`.

## Créer sa propre exception

```python
class AgeNegatifError(Exception):
    pass

def definir_age(age):
    if age < 0:
        raise AgeNegatifError("Âge négatif interdit")
    return age
```

## À retenir

> Plusieurs `except` pour plusieurs cas d'erreur. `raise` déclenche une erreur volontairement. `as e` récupère le message.
