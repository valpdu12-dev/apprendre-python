# Les types de données

Python manipule plusieurs **types** de données. Les quatre principaux :

| Type | Nom Python | Exemple |
|------|-----------|---------|
| Texte | `str` | `"Bonjour"` |
| Nombre entier | `int` | `42` |
| Nombre décimal | `float` | `3.14` |
| Vrai / Faux | `bool` | `True`, `False` |

## Vérifier le type d'une valeur

```python
print(type("Bonjour"))   # <class 'str'>
print(type(42))          # <class 'int'>
print(type(3.14))        # <class 'float'>
print(type(True))        # <class 'bool'>
```

## Convertir d'un type à l'autre

```python
nombre = int("42")       # texte → entier
texte = str(42)          # entier → texte
decimal = float("3.14")  # texte → décimal
```

## Concaténer du texte

Avec `+`, mais uniquement entre textes (pense à convertir les nombres avec `str()`) :

```python
age = 15
print("J'ai " + str(age) + " ans.")   # ✅
print("J'ai " + age + " ans.")         # ❌ erreur !
```

## À retenir

> `int()`, `str()`, `float()` convertissent une valeur. `type()` indique son type.
