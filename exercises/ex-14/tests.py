_check("trouver_nombre(42, [10, 50, 42, 1]) == 3", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {trouver_nombre(42, [10, 50, 42, 1])!r}")) if trouver_nombre(42, [10, 50, 42, 1]) != 3 else None)
_check("trouver_nombre(42, [10, 50]) is None", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {trouver_nombre(42, [10, 50])!r}")) if trouver_nombre(42, [10, 50]) is not None else None)
_check("trouver_nombre(7, [7]) == 1", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {trouver_nombre(7, [7])!r}")) if trouver_nombre(7, [7]) != 1 else None)
