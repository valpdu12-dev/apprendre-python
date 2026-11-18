_check("statut(20) retourne 'majeur'", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {statut(20)!r}")) if statut(20) != "majeur" else None)
_check("statut(18) retourne 'majeur'", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {statut(18)!r}")) if statut(18) != "majeur" else None)
_check("statut(12) retourne 'mineur'", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {statut(12)!r}")) if statut(12) != "mineur" else None)
_check("statut(0) retourne 'mineur'", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {statut(0)!r}")) if statut(0) != "mineur" else None)
