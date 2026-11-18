def _saluer():
    @majuscule
    def saluer(prenom):
        return f"bonjour {prenom}"
    return saluer("alice")

_check("dire_bonjour() == 'BONJOUR'", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {dire_bonjour()!r}")) if dire_bonjour() != "BONJOUR" else None)
_check("le décorateur fonctionne avec des arguments", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {_saluer()!r}")) if _saluer() != "BONJOUR ALICE" else None)
