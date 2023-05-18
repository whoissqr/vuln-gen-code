const { Pool } = require('pg');

// Create a new pool object with the database connection details
const pool = new Pool({
    user: 'username',
    host: 'localhost',
    database: 'database_name',
    password: 'password',
    port: 5432,
});

// Define the query function
async function query(text, params) {
    const client = await pool.connect();
    try {
        const result = await client.query(text, params);
        return result.rows;
    } finally {
        client.release();
    }
}

// Get user input
const user_input = req.body.user_input;

// Prepare a query statement with a parameterized query
const query_text = 'SELECT * FROM table_name WHERE column_name = $1';
const query_params = [user_input];

// Execute the query with the user input as the parameter
const result = await query(query_text, query_params);

// Display the results
console.log(result);
