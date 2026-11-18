import io, contextlib

def _sortie(n):
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        table_multiplication(n)
    return buf.getvalue()

def _check_table(n):
    attendu = "".join(f"{i} x {n} = {i*n}\n" for i in range(1, 11))
    obtenu = _sortie(n)
    assert obtenu == attendu, f"pour n={n}, attendu:\n{attendu}\nobtenu:\n{obtenu}"

_check("table_multiplication(3) affiche la table de 3", lambda: _check_table(3))
_check("table_multiplication(7) affiche la table de 7", lambda: _check_table(7))
