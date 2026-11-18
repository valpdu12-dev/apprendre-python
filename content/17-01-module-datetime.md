# Le module datetime — les dates

Le module `datetime` gère les dates et les heures.

## Créer une date

```python
from datetime import date, datetime

aujourdhui = date.today()          # date du jour
print(aujourdhui)                  # 2026-11-18

ma_date = date(2026, 12, 25)        # 25 décembre 2026
print(ma_date.year)                 # 2026
print(ma_date.month)                # 12
print(ma_date.day)                  # 25
```

## L'objet datetime (date + heure)

```python
maintenant = datetime.now()
print(maintenant)                   # 2026-11-18 14:30:00.123456
print(maintenant.hour, maintenant.minute)
```

## Comparer des dates

```python
d1 = date(2026, 1, 1)
d2 = date(2026, 12, 31)
print(d1 < d2)        # True
print(d2 - d1)        # datetime.timedelta(days=364)
```

## Convertir une chaîne en date : strptime

```python
from datetime import datetime

d = datetime.strptime("25/12/2026", "%d/%m/%Y")
print(d.date())       # 2026-12-25
```

Quelques codes de format : `%d` = jour, `%m` = mois, `%Y` = année, `%H:%M` = heure.

## À retenir

> `date(year, month, day)`, `date.today()`, `datetime.now()`, comparaison et soustraction de dates, `strptime(texte, format)` pour parser.
