# timedelta et formatage des dates

## timedelta : une durée

Soustraire deux dates donne un `timedelta` (une durée) :

```python
from datetime import date, timedelta

d1 = date(2026, 1, 1)
d2 = date(2026, 1, 31)
duree = d2 - d1
print(duree.days)          # 30
print(duree)               # datetime.timedelta(days=30)
```

## Ajouter / retirer du temps

```python
from datetime import date, timedelta

aujourdhui = date.today()
dans_10_jours = aujourdhui + timedelta(days=10)
hier = aujourdhui - timedelta(days=1)
dans_2_semaines = aujourdhui + timedelta(weeks=2)
print(dans_10_jours)
```

`timedelta` accepte : `days`, `weeks`, `hours`, `minutes`, `seconds`…

## Formater une date en texte : strftime

```python
from datetime import date

d = date(2026, 12, 25)
print(d.strftime("%d/%m/%Y"))          # "25/12/2026"
print(d.strftime("%A %d %B %Y"))       # "Friday 25 December 2026" (si locale anglaise)
print(d.strftime("%Y-%m-%d"))          # "2026-12-25" (format ISO, recommandé)
```

## Calculer un âge

```python
from datetime import date

def age(date_naissance):
    aujourdhui = date.today()
    a = aujourdhui.year - date_naissance.year
    if (aujourdhui.month, aujourdhui.day) < (date_naissance.month, date_naissance.day):
        a -= 1
    return a

print(age(date(2010, 6, 15)))
```

## À retenir

> `date1 - date2` = `timedelta`. `date + timedelta(days=…)` décale dans le temps. `strftime` formate, `strptime` parse.
