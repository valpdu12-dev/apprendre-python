## Objectif

Écrire une fonction `addition(a, b)` puis une **classe de tests unitaires** `TestAddition` (héritant de `unittest.TestCase`) contenant au moins ces deux tests :

- `test_addition_simple` : `addition(2, 3) == 5`
- `test_addition_negatifs` : `addition(-1, -1) == -2`

## Contraintes

- `TestAddition` doit hériter de `unittest.TestCase`
- les méthodes de test doivent commencer par `test_`
- toutes les méthodes `test_*` doivent réussir

## Indice

```python
import unittest

class TestAddition(unittest.TestCase):
    def test_addition_simple(self):
        self.assertEqual(addition(2, 3), 5)
```
