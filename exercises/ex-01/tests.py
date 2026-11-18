# La sortie du code de l'élève est capturée dans la variable _sortie_eleve
# (injectée automatiquement par l'application avant les tests).
_check("Le programme affiche exactement 'Bonjour le monde !'", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {_sortie_eleve!r}")) if _sortie_eleve != "Bonjour le monde !\n" else None)
