<?php
// establish connection to database
$servername = "localhost";
$username = "yourusername";
$password = "yourpassword";
$dbname = "yourdatabase";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// check if last name input was submitted by user
if (isset($_POST["last_name"])) {
    // sanitize user input to prevent SQL injection attacks
    $last_name = mysqli_real_escape_string($conn, $_POST["last_name"]);
    // execute query to search for users with input last name
    $sql = "SELECT * FROM users WHERE last_name = '$last_name'";
    $result = $conn->query($sql);
    // print out each result
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo "id: " . $row["id"]. " - Name: " . $row["first_name"]. " " . $row["last_name"]. " - Email: " . $row["email"]. "<br>";
        }
    } else {
        echo "0 results";
    }
}

$conn->close();
?>
<html>
<body>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        Last name: <input type="text" name="last_name">
        <input type="submit">
    </form>
</body>
</html>
