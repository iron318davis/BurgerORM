const connection = require("../config/connection.js");
const util = require("util");

let orm = {
  selectAll: function(tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    let queryString = "INSERT INTO ?? (??) VALUES ?";

    connection.query(queryString, [table, cols, vals], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: function(table, objColVals, condition, cb) {
    let queryString = "UPDATE ?? SET ?? WHERE ";

    queryString += condition;

    connection.query(queryString, [table, objColVals], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;