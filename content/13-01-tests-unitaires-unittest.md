# Les tests unitaires avec unittest

Un **test unitaire** vérifie qu'une petite unité de code (souvent une fonction) fonctionne correctement. Python inclut le module `unittest`.

## La structure d'un test

```python
import unittest

def addition(a, b):
    return a + b

class TestAddition(unittest.TestCase):
    def test_addition_simple(self):
        self.assertEqual(addition(2, 3), 5)

    def test_addition_negatifs(self):
        self.assertEqual(addition(-1, -1), -2)

# Pour exécuter les tests dans un vrai terminal :
# if __name__ == "__main__":
#     unittest.main()
```

- Chaque test est une méthode commençant par `test_`
- `self.assertEqual(a, b)` vérifie que `a == b`

## Les assertions courantes

```python
self.assertEqual(a, b)        # a == b
self.assertNotEqual(a, b)     # a != b
self.assertTrue(x)            # x est vrai
self.assertFalse(x)           # x est faux
self.assertIsNone(x)          # x is None
self.assertIn(element, liste) # element dans liste
self.assertRaises(ZeroDivisionError, diviser, 1, 0)  # vérifie qu'une erreur est levée
```

## À retenir

> `unittest.TestCase` + méthodes `test_*` + `assertEqual`/`assertTrue`/`assertRaises`… Un test = une vérification, indépendant des autres.
