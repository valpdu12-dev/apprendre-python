_check("format_prix(9.5) == '9.50 €'", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {format_prix(9.5)!r}")) if format_prix(9.5) != "9.50 €" else None)
_check("format_prix(12) == '12.00 €'", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {format_prix(12)!r}")) if format_prix(12) != "12.00 €" else None)
_check("format_prix(0.333) == '0.33 €'", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {format_prix(0.333)!r}")) if format_prix(0.333) != "0.33 €" else None)
