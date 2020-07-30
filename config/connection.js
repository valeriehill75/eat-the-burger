//Setting up MySQL connection.
const mysql = require("mysql");

//Add JawsDB
var connection;
if (process.env.JAWSDB_URL) {
    //DB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    //DB on localhost
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}

//Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for ORM use.
module.exports = connection;