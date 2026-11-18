# Bonnes pratiques des tests

## setUp : préparer avant chaque test

```python
import unittest

class TestListe(unittest.TestCase):
    def setUp(self):
        self.liste = [1, 2, 3]      # recréée avant CHAQUE test

    def test_taille(self):
        self.assertEqual(len(self.liste), 3)

    def test_ajout(self):
        self.liste.append(4)
        self.assertIn(4, self.liste)
        # la liste est remise à [1, 2, 3] avant le test suivant
```

## Règles d'or

1. **Un test = une seule vérification** (ou un seul concept)
2. **Les tests sont indépendants** : l'ordre d'exécution ne doit pas avoir d'importance
3. **Nomme clairement** : `test_addition_de_deux_nombres_positifs`
4. **Teste aussi les cas limites** : 0, négatif, chaîne vide, division par zéro…

## assertRaises : tester les erreurs

```python
import unittest

def diviser(a, b):
    return a / b

class TestDivision(unittest.TestCase):
    def test_division_normale(self):
        self.assertEqual(diviser(10, 2), 5)

    def test_division_par_zero(self):
        with self.assertRaises(ZeroDivisionError):
            diviser(10, 0)
```

## Pourquoi tester ?

Les tests unitaires permettent de **modifier son code en confiance** : si tous les tests passent après une modification, le comportement attendu est préservé. C'est une pratique professionnelle indispensable.

## À retenir

> `setUp` pour la préparation, tests indépendants, `assertRaises` pour les erreurs, et un nom de test explicite.
