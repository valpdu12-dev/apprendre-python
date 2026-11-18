_check("division_securisee(10, 2) == 5.0", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {division_securisee(10, 2)!r}")) if division_securisee(10, 2) != 5.0 else None)
_check("division_securisee(10, 0) == 'division impossible'", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {division_securisee(10, 0)!r}")) if division_securisee(10, 0) != "division impossible" else None)
_check("division_securisee(7, 2) == 3.5", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {division_securisee(7, 2)!r}")) if division_securisee(7, 2) != 3.5 else None)
