import io
import unittest

def _run_suite():
    suite = unittest.TestLoader().loadTestsFromTestCase(TestAddition)
    result = unittest.TextTestRunner(stream=io.StringIO()).run(suite)
    return result

_check("TestAddition hérite de unittest.TestCase", lambda: (_ for _ in ()).throw(AssertionError("TestAddition n'est pas un TestCase")) if not (isinstance(TestAddition, type) and issubclass(TestAddition, unittest.TestCase)) else None)
_check("TestAddition contient au moins 2 méthodes de test", lambda: (_ for _ in ()).throw(AssertionError(f"trouvé: {len([m for m in dir(TestAddition) if m.startswith('test_')])}")) if len([m for m in dir(TestAddition) if m.startswith("test_")]) < 2 else None)
_check("Tous les tests unitaires de TestAddition passent", lambda: (_ for _ in ()).throw(AssertionError("des tests échouent — voir la sortie")) if not _run_suite().wasSuccessful() else None)
