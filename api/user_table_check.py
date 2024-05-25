import sqlite3

# SQLite 데이터베이스에 연결
conn = sqlite3.connect('user.db')
cursor = conn.cursor()

# 사용자 테이블(users)에서 모든 데이터 조회
cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()

# 조회된 데이터 출력
for row in rows:
    print(row)

# 연결 종료
conn.close()