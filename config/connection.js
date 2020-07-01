const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost", process.env.HOST,
  port: 3306, process.env.PORT,
  user: "root",process.env.USER,
  password: "Secret2020$",process.env.PASSWORD,
  database: "burgers_db", process.env.DATABASE
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;