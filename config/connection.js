// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// mysql://p8p9cdx3jjcw9quu:asxbb8skzld2m284@p1us8ottbqwio8hv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/z5iaufwmw70zjjm2

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "pizzas_db"
  });

}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
