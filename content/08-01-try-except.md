# La gestion d'erreurs : try / except

Quand une erreur survient, Python **s'arrête**. Pour éviter ça, on attrape l'erreur avec `try` / `except`.

## La structure de base

```python
try:
    nombre = int("abc")     # cette ligne provoque une erreur
    print(nombre)
except:
    print("Ce n'est pas un nombre valide !")
# le programme continue ici, sans crash
```

## Attraper un type d'erreur précis

```python
try:
    resultat = 10 / 0
except ZeroDivisionError:
    print("Division par zéro interdite !")

try:
    valeur = int("hello")
except ValueError:
    print("Conversion impossible !")
```

Les erreurs courantes : `ValueError`, `ZeroDivisionError`, `TypeError`, `KeyError`, `IndexError`, `NameError`…

## else et finally

```python
try:
    nombre = int("42")
except ValueError:
    print("Erreur de conversion")
else:
    print("Conversion réussie :", nombre)   # exécuté seulement si PAS d'erreur
finally:
    print("Bloc finally")                    # TOUJOURS exécuté (erreur ou non)
```

## À retenir

> `try` = code à risque, `except TypeErreur` = gestion de l'erreur, `else` = si tout va bien, `finally` = toujours exécuté.
