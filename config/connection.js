const mysql = require("mysql");

const connection = mysql.createConnection({
  
  host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
    
  //  host: "localhost",
  //  port: 3306,
  //  user: "root",
  //  password: "Secret2020$",
  //  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;