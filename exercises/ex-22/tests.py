import os

FICHIER = "test_record.json"

def _clean():
    if os.path.exists(FICHIER):
        os.remove(FICHIER)

_check("lire_record sur fichier inexistant retourne 0", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {lire_record(FICHIER)!r}")) if lire_record(FICHIER) != 0 else None)
_check("premier enregistrement = nouveau record (True)", lambda: (_ for _ in ()).throw(AssertionError("devrait être True")) if not (enregistrer_record(3, FICHIER) is True) else None)
_check("score inférieur ne bat pas le record (False)", lambda: (_ for _ in ()).throw(AssertionError("devrait être False")) if not (enregistrer_record(2, FICHIER) is False) else None)
_check("score supérieur = nouveau record (True)", lambda: (_ for _ in ()).throw(AssertionError("devrait être True")) if not (enregistrer_record(5, FICHIER) is True) else None)
_check("lire_record retourne bien 5 après enregistrements", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {lire_record(FICHIER)!r}")) if lire_record(FICHIER) != 5 else None)
