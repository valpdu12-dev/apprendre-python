# Exercice 10 — Héritage : la classe Chien

class Animal:
    def __init__(self, nom):
        self.nom = nom

    def parler(self):
        return "L'animal fait un bruit."

# À compléter : Chien hérite de Animal et redéfinit parler()
class Chien(Animal):
    pass
