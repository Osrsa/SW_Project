import sqlite3

# SQLite 데이터베이스에 연결
conn = sqlite3.connect('user.db')
cursor = conn.cursor()

# 사용자(users) 테이블에서 모든 데이터 조회
print("Users:")
cursor.execute('SELECT * FROM users')
users = cursor.fetchall()
for user in users:
    print(user)

# # 사진(photos) 테이블에서 모든 데이터 조회
# print("\nPhotos:")
# cursor.execute('SELECT * FROM photos')
# photos = cursor.fetchall()
# for photo in photos:
#     print(photo)

# # 키워드(keywords) 테이블에서 모든 데이터 조회
# print("\nKeywords:")
# cursor.execute('SELECT * FROM keywords')
# keywords = cursor.fetchall()
# for keyword in keywords:
#     print(keyword)

# 연결 종료
conn.close()

#####################################################################################################################
# #컬럼 확인 코드
# def get_table_columns(table_name):
#     conn = sqlite3.connect('user.db')
#     cursor = conn.cursor()
#     cursor.execute(f"PRAGMA table_info({table_name})")
#     columns = cursor.fetchall()
#     conn.close()
#     return columns
    
# users_columns = get_table_columns('users')
# photos_columns = get_table_columns('photos')
# keywords_columns = get_table_columns('keywords')

# print("Users Table Columns:")
# for column in users_columns:
#     print(column)

# print("\nPhotos Table Columns:")
# for column in photos_columns:
#     print(column)

# print("\nKeywords Table Columns:")
# for column in keywords_columns:
#     print(column)



######################################################################

# # SQLite 데이터베이스 연결
# conn = sqlite3.connect('user.db')

# # 커서 생성
# cursor = conn.cursor()

# # SQL 쿼리 실행: 특정 테이블 삭제
# cursor.execute('DROP TABLE IF EXISTS photos')

# # 변경사항 저장
# conn.commit()

# # 유저 데이터베이스에 있는 모든 테이블 이름 가져오기
# cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
# tables = cursor.fetchall()

# # 테이블 이름 출력
# print("유저 데이터베이스에 있는 테이블:")
# for table in tables:
#     print(table[0])

# # 연결 종료
# conn.close()