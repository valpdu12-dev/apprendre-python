# Exercice 12 — Classe abstraite Forme et Carre
from abc import ABC, abstractmethod

class Forme(ABC):
    @abstractmethod
    def aire(self):
        pass

# À compléter : Carre hérite de Forme, avec __init__(cote) et aire()
