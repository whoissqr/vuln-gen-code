import mysql.connector

# establish connection to database
mydb = mysql.connector.connect(
  host="localhost",
  user="yourusername",
  password="yourpassword",
  database="yourdatabase"
)

# create cursor object to execute SQL queries
mycursor = mydb.cursor()

# prompt user to enter a first or last name
name = input("Enter a first or last name: ")

# execute query to search for users based on input name
sql = "SELECT * FROM users WHERE first_name = %s OR last_name = %s"
val = (name, name)
mycursor.execute(sql, val)

# fetch all results from query
results = mycursor.fetchall()

# print out each result
for row in results:
  print(row)
