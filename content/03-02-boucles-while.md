# La boucle while

`while` répète un bloc **tant qu'une condition est vraie**.

```python
compteur = 0
while compteur < 5:
    print(compteur)
    compteur = compteur + 1   # ne pas oublier d'avancer !
```

⚠️ Si la condition reste toujours vraie, la boucle ne s'arrête jamais : c'est une **boucle infinie**.

## Exemple : demander une saisie

```python
mot_de_passe = ""
while mot_de_passe != "python":
    mot_de_passe = input("Mot de passe ? ")
print("Bienvenue !")
```

## break et continue

- `break` : sort immédiatement de la boucle
- `continue` : passe à l'itération suivante

```python
for i in range(10):
    if i == 3:
        continue   # saute le 3
    if i == 7:
        break      # s'arrête au 7
    print(i)       # affiche 0, 1, 2, 4, 5, 6
```

## À retenir

> `while` = tant que la condition est vraie. Pense toujours à faire évoluer la condition pour éviter la boucle infinie.
