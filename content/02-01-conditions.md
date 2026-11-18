# if / else / elif

Un programme doit souvent **prendre des décisions**. En Python, on utilise `if`.

## La structure de base

```python
age = 18
if age >= 18:
    print("Tu es majeur.")
else:
    print("Tu es mineur.")
```

⚠️ En Python, l'**indentation** (les espaces en début de ligne) définit le bloc de code. C'est obligatoire, pas juste une convention.

## Plusieurs choix : elif

```python
note = 14
if note >= 16:
    print("Très bien !")
elif note >= 12:
    print("Bien.")
elif note >= 10:
    print("Passable.")
else:
    print("Insuffisant.")
```

Python teste les conditions **dans l'ordre** et s'arrête au premier `True`.

## Les opérateurs de comparaison

| Opérateur | Signification |
|-----------|---------------|
| `==` | égal à |
| `!=` | différent de |
| `<` `>` | inférieur / supérieur |
| `<=` `>=` | inférieur ou égal / supérieur ou égal |

## À retenir

> `if` teste une condition, `elif` ajoute des cas, `else` attrape tout le reste. L'indentation est obligatoire.
