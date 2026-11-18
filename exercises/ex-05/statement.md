## Objectif

Écrire une fonction `format_prix(prix)` qui retourne le prix formaté avec **2 décimales** suivies de ` €`, grâce à une **f-string**.

## Exemples

```python
format_prix(9.5)    # "9.50 €"
format_prix(12)     # "12.00 €"
format_prix(0.333)  # "0.33 €"
```

## Indice

Dans une f-string, `{prix:.2f}` formate avec 2 décimales.
