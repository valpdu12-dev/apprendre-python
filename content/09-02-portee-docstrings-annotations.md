# Portée, docstrings et annotations de type

## La portée des variables (scope)

Une variable créée **dans une fonction** n'existe que dans cette fonction :

```python
x = 10          # variable globale

def ma_fonction():
    y = 5       # variable locale
    print(x)    # ✅ on peut LIRE une globale
    return y

print(ma_fonction())   # 5
print(y)               # ❌ NameError : y n'existe pas ici
```

Pour modifier une globale dans une fonction, utilise `global` (à manipuler avec précaution) :

```python
compteur = 0
def incrementer():
    global compteur
    compteur += 1
```

## Documenter son code : les docstrings

Une **docstring** est un commentaire placé juste après `def`, entre `"""` :

```python
def aire_rectangle(longueur, largeur):
    """Retourne l'aire d'un rectangle.

    longueur et largeur doivent être des nombres positifs.
    """
    return longueur * largeur

print(aire_rectangle.__doc__)   # affiche la docstring
```

## Annotations de type

On peut indiquer le **type** des paramètres et du retour (indicatif, Python ne vérifie pas) :

```python
def saluer(prenom: str) -> str:
    """Retourne un message de salutation."""
    return f"Bonjour {prenom} !"
```

- `prenom: str` → le paramètre est une chaîne
- `-> str` → la fonction retourne une chaîne

## À retenir

> Les variables locales n'existent que dans leur fonction. Docstring entre `"""` juste après `def`. Annotations `: type` et `-> type` pour documenter.
