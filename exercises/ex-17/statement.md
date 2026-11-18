## Objectif

Écrire une fonction `jours_entre(date1, date2)` qui prend deux dates au format `"JJ/MM/AAAA"` et retourne le **nombre de jours entre elles** (toujours positif).

## Exemples

```python
jours_entre("01/01/2026", "31/01/2026")   # 30
jours_entre("31/01/2026", "01/01/2026")   # 30 (valeur absolue)
jours_entre("25/12/2026", "25/12/2026")   # 0
```

## Indice

`datetime.strptime(texte, "%d/%m/%Y").date()` pour convertir, puis `abs((d2 - d1).days)`.
