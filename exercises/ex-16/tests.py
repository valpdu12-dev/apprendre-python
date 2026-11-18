import os

def _ecrire_csv():
    with open("test_notes.csv", "w", encoding="utf-8") as f:
        f.write("prenom,note\nAlice,14.5\nBob,11\n")
    with open("test_notes2.csv", "w", encoding="utf-8") as f:
        f.write("produit,prix\npomme,2\npain,1.5\nlait,1.5\n")

_ecrire_csv()

_check("moyenne_colonne('test_notes.csv', 'note') == 12.75", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {moyenne_colonne('test_notes.csv', 'note')!r}")) if abs(moyenne_colonne("test_notes.csv", "note") - 12.75) > 1e-9 else None)
_check("moyenne_colonne('test_notes2.csv', 'prix') == 5/3", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {moyenne_colonne('test_notes2.csv', 'prix')!r}")) if abs(moyenne_colonne("test_notes2.csv", "prix") - 5/3) > 1e-9 else None)
