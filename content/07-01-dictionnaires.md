# Les dictionnaires

Un **dictionnaire** (`dict`) associe des **clés** à des **valeurs** : `{"cle": valeur}`.

## Créer et utiliser un dictionnaire

```python
eleve = {"prenom": "Alice", "age": 15, "note": 14.5}
print(eleve["prenom"])     # "Alice"
print(eleve["age"])        # 15

eleve["ville"] = "Paris"   # ajoute une paire
eleve["age"] = 16          # modifie une valeur
```

## ⚠️ Clé inexistante

Accéder à une clé qui n'existe pas provoque une erreur `KeyError`. Utilise `.get()` :

```python
print(eleve.get("ville"))        # "Paris"
print(eleve.get("pays"))         # None (au lieu d'une erreur)
print(eleve.get("pays", "France"))  # "France" (valeur par défaut)
```

## Parcourir un dictionnaire

```python
for cle in eleve:                    # parcourt les clés
    print(cle, "->", eleve[cle])

for cle, valeur in eleve.items():    # parcourt clés + valeurs
    print(f"{cle} = {valeur}")

print(eleve.keys())     # toutes les clés
print(eleve.values())   # toutes les valeurs
```

## Méthodes utiles

```python
eleve = {"prenom": "Alice", "age": 15}
print("prenom" in eleve)    # True (test d'existence)
del eleve["age"]            # supprime une paire
```

## Dictionnaires imbriqués

```python
classe = {
    "Alice": {"age": 15, "note": 14.5},
    "Bob":   {"age": 16, "note": 11},
}
print(classe["Alice"]["note"])   # 14.5
```

## À retenir

> `dict` = paires clé → valeur. `.get(cle, defaut)` évite les erreurs. `.items()` permet de tout parcourir.
