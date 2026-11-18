_check("carres_pairs(6) == [0, 4, 16, 36]", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {carres_pairs(6)!r}")) if carres_pairs(6) != [0, 4, 16, 36] else None)
_check("carres_pairs(3) == [0, 4]", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {carres_pairs(3)!r}")) if carres_pairs(3) != [0, 4] else None)
_check("carres_pairs(0) == [0]", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {carres_pairs(0)!r}")) if carres_pairs(0) != [0] else None)
