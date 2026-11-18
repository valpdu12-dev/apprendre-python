_check("Point(1,2) + Point(3,4) == Point(4,6)", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {Point(1,2)+Point(3,4)!r}")) if Point(1, 2) + Point(3, 4) != Point(4, 6) else None)
_check("(Point(0,0) + Point(5,5)).x == 5", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {(Point(0,0)+Point(5,5)).x!r}")) if (Point(0, 0) + Point(5, 5)).x != 5 else None)
_check("Point(1,2) == Point(1,2) (égalité de dataclass)", lambda: (_ for _ in ()).throw(AssertionError("égalité rompue")) if Point(1, 2) != Point(1, 2) else None)
_check("Point(1,2) != Point(2,1)", lambda: (_ for _ in ()).throw(AssertionError("devrait être différent")) if Point(1, 2) == Point(2, 1) else None)
