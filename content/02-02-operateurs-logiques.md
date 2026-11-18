# Opérateurs logiques

On peut combiner plusieurs conditions avec `and`, `or` et `not`.

## and (et)

Les deux conditions doivent être vraies :

```python
age = 20
a_permis = True
if age >= 18 and a_permis:
    print("Tu peux conduire.")
```

## or (ou)

Au moins une des conditions doit être vraie :

```python
jour = "samedi"
if jour == "samedi" or jour == "dimanche":
    print("C'est le week-end !")
```

## not (non)

Inverse une condition :

```python
pluie = False
if not pluie:
    print("Il fait beau !")
```

## Combiner avec des parenthèses

```python
if (age >= 18 and a_permis) or est_accompagne:
    print("OK")
```

## À retenir

> `and` = toutes vraies, `or` = au moins une vraie, `not` = inversion. Les parenthèses structurent les combinaisons.
