_check("list(pairs(6)) == [0, 2, 4, 6]", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {list(pairs(6))!r}")) if list(pairs(6)) != [0, 2, 4, 6] else None)
_check("list(pairs(3)) == [0, 2]", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {list(pairs(3))!r}")) if list(pairs(3)) != [0, 2] else None)
_check("list(pairs(0)) == [0]", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {list(pairs(0))!r}")) if list(pairs(0)) != [0] else None)
_check("pairs(4) est un générateur (lazy)", lambda: (_ for _ in ()).throw(AssertionError("pas un générateur")) if not hasattr(pairs(4), "__next__") else None)
