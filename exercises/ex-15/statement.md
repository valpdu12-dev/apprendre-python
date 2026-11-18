## Objectif

Écrire deux fonctions pour une liste de courses persistante :

- `sauvegarder(data, chemin)` : écrit le dictionnaire `data` au format JSON dans le fichier `chemin`
- `charger(chemin)` : lit le fichier `chemin` et retourne le dictionnaire, ou `{"courses": []}` si le fichier n'existe pas

## Exemple

```python
sauvegarder({"courses": ["pomme", "pain"]}, "ma_liste.json")
charger("ma_liste.json")        # {"courses": ["pomme", "pain"]}
charger("inexistant.json")      # {"courses": []}
```

## Indice

`json.dump(data, f, ensure_ascii=False, indent=2)` pour écrire, `json.load(f)` pour lire, et `try/except FileNotFoundError` dans `charger`.
