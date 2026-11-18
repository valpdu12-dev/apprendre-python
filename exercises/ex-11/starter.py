# Exercice 11 — Dataclass Point avec __add__
from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

    # À compléter : définir __add__(self, autre)
