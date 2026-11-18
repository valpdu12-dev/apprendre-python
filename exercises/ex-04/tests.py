_check("moyenne([10, 12, 14]) == 12.0", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {moyenne([10, 12, 14])!r}")) if moyenne([10, 12, 14]) != 12.0 else None)
_check("moyenne([5, 15]) == 10.0", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {moyenne([5, 15])!r}")) if moyenne([5, 15]) != 10.0 else None)
_check("moyenne([7]) == 7.0", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {moyenne([7])!r}")) if moyenne([7]) != 7.0 else None)
