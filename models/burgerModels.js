//Import the ORM to create functions for the database.
const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    //Variable, Cols, and Vals as Arrays.
    create: function(cols, vals, cb) {
        orm.create("bugers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

//Export the database functions for the controller
module.exports = burger;