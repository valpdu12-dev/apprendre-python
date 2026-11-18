_check("Chien('Rex').nom == 'Rex'", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {Chien('Rex').nom!r}")) if Chien("Rex").nom != "Rex" else None)
_check("Chien('Rex').parler() == 'Wouf !'", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {Chien('Rex').parler()!r}")) if Chien("Rex").parler() != "Wouf !" else None)
_check("isinstance(Chien('Rex'), Animal)", lambda: (_ for _ in ()).throw(AssertionError("Chien n'hérite pas de Animal")) if not isinstance(Chien("Rex"), Animal) else None)
