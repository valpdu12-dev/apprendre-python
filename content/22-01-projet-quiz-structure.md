# Mini-projet : quiz avec score — structure

On construit un **quiz en ligne de commande** : des questions, des réponses, un score… et on sauvegarde le **meilleur score** dans un fichier JSON.

## Cahier des charges

1. Une liste de questions (texte + 4 réponses + bonne réponse)
2. Une boucle qui pose les questions avec `input()`
3. Un score affiché à la fin
4. Le **meilleur score** sauvegardé dans `record.json` et affiché au démarrage

## Les données du quiz

```python
QUESTIONS = [
    {
        "question": "Combien font 2 + 2 ?",
        "reponses": ["3", "4", "5", "6"],
        "bonne": "4",
    },
    {
        "question": "Quel mot-clé définit une fonction ?",
        "reponses": ["func", "def", "lambda", "return"],
        "bonne": "def",
    },
]
```

## La boucle de jeu

```python
def jouer():
    score = 0
    for q in QUESTIONS:
        print(q["question"])
        for i, r in enumerate(q["reponses"], start=1):
            print(f"  {i}. {r}")
        choix = input("Ta réponse (numéro) : ")
        if q["reponses"][int(choix) - 1] == q["bonne"]:
            score += 1
            print("✅ Bonne réponse !")
        else:
            print(f"❌ Mauvaise réponse (c'était : {q['bonne']})")
    return score
```

## À retenir

> Un quiz = données (liste de dicts) + boucle de jeu + score. `input()` pour interagir (fonctionne dans le bac à sable via une boîte de dialogue).
