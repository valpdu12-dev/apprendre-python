# Mini-projet : quiz — record sauvegardé en JSON

## Lire le record

```python
import json

FICHIER_RECORD = "record.json"

def lire_record(chemin=FICHIER_RECORD):
    try:
        with open(chemin, "r", encoding="utf-8") as f:
            return json.load(f).get("record", 0)
    except FileNotFoundError:
        return 0
```

## Enregistrer le record si battu

```python
def enregistrer_record(score, chemin=FICHIER_RECORD):
    record = lire_record(chemin)
    if score > record:
        with open(chemin, "w", encoding="utf-8") as f:
            json.dump({"record": score}, f, ensure_ascii=False, indent=2)
        return True     # nouveau record !
    return False
```

## Boucle complète du jeu

```python
record = lire_record()
print(f"🏆 Record actuel : {record}/{len(QUESTIONS)}")

score = jouer()
print(f"Ton score : {score}/{len(QUESTIONS)}")

if enregistrer_record(score):
    print("🎉 Nouveau record battu !")
```

## Prolongements possibles

- Mélanger les questions avec `random.shuffle`
- Plusieurs niveaux de difficulté
- Sauvegarder l'historique des parties (liste de scores avec date)
- Version graphique plus tard avec une vraie interface

## À retenir

> `lire_record` avec `FileNotFoundError` pour le premier lancement. `enregistrer_record` ne réécrit que si le score est meilleur. Le JSON rend la persistance triviale.
