import sqlite3

conn = sqlite3.connect('user.db')
print("Opened database successfully")

conn.execute('''
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        nickname TEXT UNIQUE NOT NULL
    )
''')

print("Table created successfully")
conn.close()