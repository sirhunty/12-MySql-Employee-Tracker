const util = require("util");
const mysql = require("mysql");

// Setting up the MySQL database connection at localhost and using the root password I set up
const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Added my root password to access the database
  password: "root",
  database: "employees"
});


connection.connect();

// Set up of connection.query to use promises instead of callbacks
// This allows for the async/await syntax to be used
connection.query = util.promisify(connection.query);

module.exports = connection;
