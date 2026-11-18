_check("moyenne(10, 12, 14) == 12.0", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {moyenne(10, 12, 14)!r}")) if moyenne(10, 12, 14) != 12.0 else None)
_check("moyenne(8, 16) == 12.0", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {moyenne(8, 16)!r}")) if moyenne(8, 16) != 12.0 else None)
_check("moyenne() == 0", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {moyenne()!r}")) if moyenne() != 0 else None)
