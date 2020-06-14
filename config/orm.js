//Import MySQL connection.
const connection = require("../config/connection.js");

//Create array of question marks.
function printQuestionMarks(num) {
  const arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

//Convert object key/value pairs to SQL syntax.
function objToSql(ob) {
  const arr = [];

  //loop through keys and push key/value as a string into array
  for (var key in ob) {
    const value = ob[key];
    //check to skip hidden properties.
    if (Object.hasOwnProperty.call(ob, key)) {
      //if string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

//Object for all our SQL statement functions.
const orm = {
  all: function (tableInput, cb) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
      const queryString = "INSERT INTO " + table;

      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";

      console.log(queryString);

      connection.query(queryString, vals, function(err, result) {
          if (err) {
              throw err;
          }

          cb(result);
      });
  },

  update: function(table, objColVals, condition, cb) {
      const queryString = "UPDATE " + table;

      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);
      connection.query(queryString, function(err, result) {
          if (err) {
              throw err;
          }

          cb (result);
      });
  },
  delete: function(table, condition, cb) {
      const queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;

      connection.query(queryString, function(err, result) {
          if (err) {
              throw err;
          }

          cb(result);
      });
  }
};

//Export orm object for the model
module.exports = orm;
