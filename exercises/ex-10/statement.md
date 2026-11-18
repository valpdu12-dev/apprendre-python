## Objectif

Compléter le code pour créer une classe `Chien` qui **hérite** de `Animal` :

- `Animal` possède un attribut `nom` (défini via `__init__`) et une méthode `parler()` qui retourne `"L'animal fait un bruit."`
- `Chien` hérite de `Animal` et **redéfinit** `parler()` pour retourner `"Wouf !"`

## Vérification

```python
rex = Chien("Rex")
rex.nom        # "Rex"
rex.parler()   # "Wouf !"
```
