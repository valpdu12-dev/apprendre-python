import os

def _nettoyer():
    for f in ("test_liste.json", "test_inexistant.json"):
        if os.path.exists(f):
            os.remove(f)

def _roundtrip():
    _nettoyer()
    data = {"courses": ["pomme", "pain"], "urgent": True}
    sauvegarder(data, "test_liste.json")
    return charger("test_liste.json") == data

_check("sauvegarder puis charger conserve les données", lambda: (_ for _ in ()).throw(AssertionError("roundtrip échoué")) if not _roundtrip() else None)
_check("charger sur un fichier inexistant retourne {'courses': []}", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {charger('test_inexistant.json')!r}")) if charger("test_inexistant.json") != {"courses": []} else None)
_check("le fichier JSON est bien créé sur le disque", lambda: (_ for _ in ()).throw(AssertionError("fichier absent")) if not os.path.exists("test_liste.json") else None)
