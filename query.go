package main

import (
    "database/sql"
    "fmt"
    _ "github.com/go-sql-driver/mysql"
)

func main() {
    // establish connection to database
    db, err := sql.Open("mysql", "yourusername:yourpassword@tcp(localhost:3306)/yourdatabase")
    if err != nil {
        panic(err.Error())
    }
    defer db.Close()

    // execute query to search for users with last name 'Smith'
    rows, err := db.Query("SELECT * FROM users WHERE last_name = ?", "Smith")
    if err != nil {
        panic(err.Error())
    }
    defer rows.Close()

    // print out each result
    for rows.Next() {
        var id int
        var firstName string
        var lastName string
        var email string
        if err := rows.Scan(&id, &firstName, &lastName, &email); err != nil {
            panic(err.Error())
        }
        fmt.Printf("%d %s %s %s\n", id, firstName, lastName, email)
    }
}
