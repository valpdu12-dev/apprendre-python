import sqlite3

def _ids():
    g = GestionnaireContacts(sqlite3.connect(":memory:"))
    return g.ajouter("X", "0") == 1 and g.ajouter("Y", "0") == 2

def _gestionnaire():
    g = GestionnaireContacts(sqlite3.connect(":memory:"))
    g.ajouter("Bob", "0602")
    g.ajouter("Alice", "0601")
    return g

def _apres_suppr():
    g = _gestionnaire()
    g.supprimer(1)
    return g.lister()

_check("ajouter retourne les id auto-incrémentés", lambda: (_ for _ in ()).throw(AssertionError("ids faux")) if not _ids() else None)
_check("lister retourne trié par nom", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {_gestionnaire().lister()!r}")) if _gestionnaire().lister() != [(2, "Alice", "0601"), (1, "Bob", "0602")] else None)
_check("supprimer retire le contact", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {_apres_suppr()!r}")) if _apres_suppr() != [(2, "Alice", "0601")] else None)
