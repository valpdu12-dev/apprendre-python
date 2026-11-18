# functools.wraps et cas d'usage des décorateurs

## functools.wraps : préserver les métadonnées

Sans précaution, le décorateur remplace le nom et la docstring de la fonction :

```python
from functools import wraps

def mon_decorateur(fonction):
    @wraps(fonction)          # copie nom, docstring, etc.
    def wrapper(*args, **kwargs):
        print("Avant l'appel")
        resultat = fonction(*args, **kwargs)
        print("Après l'appel")
        return resultat
    return wrapper

@mon_decorateur
def saluer(prenom):
    """Salue une personne."""
    return f"Bonjour {prenom} !"

print(saluer("Alice"))        # "Avant..." Bonjour Alice ! "Après..."
print(saluer.__name__)        # "saluer" (et pas "wrapper") grâce à @wraps
print(saluer.__doc__)         # "Salue une personne."
```

## Cas d'usage courants

- **Chronométrage** : mesurer le temps d'exécution
- **Logging** : tracer les appels de fonction
- **Contrôle d'accès** : vérifier des permissions avant d'exécuter
- **Mise en cache** : `@functools.lru_cache` pour mémoriser les résultats

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(100))   # instantané grâce au cache
```

## Plusieurs décorateurs

```python
@decorateur_a
@decorateur_b
def ma_fonction():
    ...
# équivaut à : ma_fonction = decorateur_a(decorateur_b(ma_fonction))
```

## À retenir

> `@wraps(fonction)` préserve `__name__` et `__doc__`. Décorateurs usuels : chrono, logging, cache (`lru_cache`), contrôle d'accès. Ils se stackent.
