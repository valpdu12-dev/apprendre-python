import sqlite3

def _nouvelle_base():
    conn = sqlite3.connect(":memory:")
    creer_table(conn)
    return conn

def _table_existe():
    conn = sqlite3.connect(":memory:")
    creer_table(conn)
    cur = conn.cursor()
    cur.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='utilisateurs'")
    return cur.fetchone() is not None

def _base_test():
    conn = _nouvelle_base()
    ajouter_utilisateur(conn, "Bob", 16)
    ajouter_utilisateur(conn, "Alice", 15)
    return conn

def _ids_ok():
    conn = _nouvelle_base()
    ajouter_utilisateur(conn, "X", 1)
    ajouter_utilisateur(conn, "Y", 2)
    return [l[0] for l in lister_utilisateurs(conn)] == [1, 2]

_check("creer_table crée la table utilisateurs", lambda: (_ for _ in ()).throw(AssertionError("table absente")) if not _table_existe() else None)
_check("ajouter + lister : [(2, 'Alice', 15), (1, 'Bob', 16)]", lambda: (_ for _ in ()).throw(AssertionError(f"obtenu: {lister_utilisateurs(_base_test())!r}")) if lister_utilisateurs(_base_test()) != [(2, "Alice", 15), (1, "Bob", 16)] else None)
_check("les id sont auto-incrémentés", lambda: (_ for _ in ()).throw(AssertionError("id incorrects")) if not _ids_ok() else None)
