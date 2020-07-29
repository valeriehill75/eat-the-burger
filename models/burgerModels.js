//Import the ORM to create functions for the database.
const orm = require("../config/orm.js");

const burger = {
    selectAll() {
        return orm.all("burgers")
    },
    //Variable, Cols, and Vals as Arrays.
    insertOne(cols, vals) {
        return orm.create("bugers", cols, vals);
    },
    updateOne(objColVals, condition) {
        return orm.update("burgers", objColVals, condition);
    },
};

//Export the database functions for the controller
module.exports = burger;