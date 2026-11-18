# Slicing et f-strings

## Le slicing (découpage)

On peut extraire une partie d'une chaîne avec `texte[début:fin]` (fin exclu) :

```python
mot = "python"
print(mot[0:2])    # "py"
print(mot[2:])     # "thon"
print(mot[:3])     # "pyt"
print(mot[-1])     # "n" (dernier caractère)
print(mot[::2])    # "pto" (un caractère sur deux)
```

## Les f-strings (chaînes formatées)

Préfixe `f` devant une chaîne pour insérer des variables avec `{}` — la méthode moderne et lisible :

```python
prenom = "Alice"
age = 15
print(f"Bonjour {prenom}, tu as {age} ans.")
print(f"Dans 5 ans, tu auras {age + 5} ans.")   # on peut calculer dans {}
```

## Formater les nombres

```python
prix = 9.5
print(f"Prix : {prix:.2f} €")    # "Prix : 9.50 €"
pourcent = 0.25
print(f"{pourcent:.0%}")         # "25%"
```

## Comparaison avec les anciennes méthodes

```python
# ancien style (fonctionne encore) :
print("Bonjour " + prenom + " !")
# moderne et recommandé :
print(f"Bonjour {prenom} !")
```

## À retenir

> `texte[a:b]` découpe la chaîne. `f"... {variable} ..."` insère des valeurs directement dans le texte, avec formatage possible (`:.2f`, `:.0%`).
