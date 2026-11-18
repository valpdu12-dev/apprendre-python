# Les listes

Une **liste** stocke plusieurs valeurs dans une seule variable.

## Créer une liste

```python
fruits = ["pomme", "banane", "cerise"]
nombres = [3, 7, 12, 21]
```

## Accéder à un élément

Les indices commencent à **0** :

```python
print(fruits[0])   # "pomme"
print(fruits[2])   # "cerise"
print(fruits[-1])  # dernier élément : "cerise"
```

## Modifier et ajouter

```python
fruits[1] = "poire"          # modifier
fruits.append("orange")     # ajouter à la fin
fruits.remove("poire")      # supprimer
```

## Parcourir une liste

```python
for fruit in fruits:
    print(fruit)
```

## Longueur d'une liste

```python
print(len(fruits))   # nombre d'éléments
```

## À retenir

> Les listes se créent avec `[ ]`, l'index commence à 0, `len()` donne la taille, et `for` permet de tout parcourir.
