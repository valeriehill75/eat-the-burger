//Import MySQL connection.
const connection = require("../config/connection.js");

//Object for all our SQL statement functions.
const orm = {
  selectAll() {
    return new Promise((resolve, reject) => {
    const queryString = "SELECT * FROM burgers;";
      db.query(queryString, (err, result) => {
        if (err) {
          reject(err);
        }
      resolve(result);
      });
    });
  },

  insertOne(burger_name) {
    return new Promise((resolve, reject) => {
      const queryString = "INSERT INTO burgers (burger_name) VALUES (?);";
      db.query(queryString, [burger_name], (err, result) => {
          if (err) {
              reject(err);
          }

          resolve(result);
      });
    });
  },

  updateOne(condition) {
    return new Promise((resolve, reject) => {
      const queryString = `UPDATE burgers SET devoured = true WHERE ${condition}`;
      db.query(queryString, [condition], (err, result) => {
          if (err) {
            reject(err);
          }

          resolve(result);
      });
    });
  },
};

//Export orm object for the model
module.exports = orm;
