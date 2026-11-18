# Les méthodes des chaînes de caractères

Une chaîne (`str`) possède de nombreuses **méthodes** utiles. Une méthode s'appelle avec un point : `"texte".ma_methode()`.

## Les incontournables

```python
texte = "  Bonjour Python !  "
print(texte.upper())        # "  BONJOUR PYTHON !  "
print(texte.lower())        # "  bonjour python !  "
print(texte.strip())        # "Bonjour Python !" (espaces supprimés)
print(texte.replace("Python", "le monde"))  # "  Bonjour le monde !  "
```

## Découper et assembler

```python
phrase = "pomme,banane,cerise"
fruits = phrase.split(",")        # ["pomme", "banane", "cerise"]
texte = " - ".join(fruits)        # "pomme - banane - cerise"
```

## Tester le contenu

```python
mot = "python"
print(mot.startswith("py"))   # True
print(mot.endswith("on"))     # True
print("th" in mot)            # True
print(len(mot))               # 6
```

## ⚠️ Piège classique

Les chaînes sont **immuables** : `mot.upper()` ne modifie pas `mot`, elle retourne une *nouvelle* chaîne.

```python
mot = "python"
mot.upper()
print(mot)   # toujours "python" !
```

## À retenir

> `upper()`, `lower()`, `strip()`, `split()`, `join()`, `replace()`, `startswith()`… Les chaînes sont immuables : il faut récupérer le résultat.
