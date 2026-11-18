# Le module json — sauvegarder des données

## Pourquoi JSON ?

Pour qu'une liste de courses (ou un score) **survive à la fermeture du programme**, il faut l'écrire dans un fichier. Le format **JSON** est idéal : c'est du texte lisible que Python transforme en listes/dictionnaires.

## Sérialiser et désérialiser

```python
import json

donnees = {"courses": ["pomme", "pain"], "urgent": True}

# Python -> texte JSON
texte = json.dumps(donnees, ensure_ascii=False, indent=2)
print(texte)

# texte JSON -> Python
retour = json.loads(texte)
print(retour["courses"])   # ["pomme", "pain"]
```

- `json.dumps(obj)` : objet Python → chaîne JSON
- `json.loads(texte)` : chaîne JSON → objet Python
- `indent=2` rend le fichier lisible ; `ensure_ascii=False` conserve les accents

## À retenir

> `json.dumps` transforme un objet en texte, `json.loads` fait l'inverse. Parfait pour persister des données simplement.
