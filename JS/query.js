// generated by ChatGPT using below prompt:
// please provide some JavaScript code sample to which receive some input
// from stdin and query mySQL database
const readline = require('readline');
const mysql = require('mysql');

// Create a readline interface to receive input from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// Ask the user for input
rl.question('Enter a search term: ', (searchTerm) => {

  // Query the database for results matching the search term
  pool.query(`SELECT * FROM your_table WHERE your_column LIKE '%${searchTerm}%'`, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
    }

    // Close the readline interface and MySQL connection pool
    rl.close();
    pool.end();
  });
});

