def _raises_typeerror():
    try:
        Forme()
        return False
    except TypeError:
        return True

_check("Carre(3).aire() == 9", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {Carre(3).aire()!r}")) if Carre(3).aire() != 9 else None)
_check("Carre(5).aire() == 25", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {Carre(5).aire()!r}")) if Carre(5).aire() != 25 else None)
_check("Carre hérite de Forme", lambda: (_ for _ in ()).throw(AssertionError("pas d'héritage")) if not issubclass(Carre, Forme) else None)
_check("Forme ne peut pas être instanciée (TypeError)", lambda: (_ for _ in ()).throw(AssertionError("Forme() a réussi !")) if not _raises_typeerror() else None)
