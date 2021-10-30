import mysql.connector
from mysql.connector import errorcode
import pandas as pd

config = {
    'user': 'root',
    'password': 'Nnd09082001*',
    'host': '127.0.0.1',
    'database': 'database - db',
    'raise_on_warnings': True

}

try:
    cnx = mysql.connector.connect(**config)

except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Something is wrong with your user name or password")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("Database 📂 does not exist ❌")
    else:
        print(err)

else:
    print("Connected the database 📂..")
    movie_arr = []
    cursor = cnx.cursor()
    query = "SELECT user_id, title, rating FROM test_db"
    cursor.execute(query)
    for (user_id, title, rating) in cursor:
        movie_arr.append((user_id, title, rating))

    # print(movie_arr)

    ratings = pd.DataFrame(movie_arr, columns=['user_id', 'title', 'rating'])
    # print(ratings.head())

    user_ratings = ratings.pivot_table(index=['user_id'], columns=['title'], values='rating')
    user_ratings = user_ratings.dropna(thresh=1, axis=1).fillna(0)
    print(user_ratings.head(20))

    item_similarity_df = user_ratings.corr(method='pearson')
    print(item_similarity_df.head())


    def get_similar_movies(movie_name, user_rating):
        similar_score = item_similarity_df[movie_name]*(user_rating - 2.5)
        similar_score = similar_score.sort_values(ascending=False)
        return similar_score


    action_lover = [("Detective Conan", 4),
                    ("Brooklyn Nine-Nine", 4),
                    ("Money Heist", 4),
                    ("WandaVision", 3)]

    similar_movies = pd.DataFrame()
    #
    for movie, rating in action_lover:
        similar_movies = similar_movies.append(get_similar_movies(movie, rating), ignore_index=True)

    # print(similar_movies.head())
    similar_movies.sum().sort_values(ascending=False)
    print(similar_movies.sum().sort_values(ascending=False).head())

    print()
    print("Closing connection 👋..")
    cnx.close()


