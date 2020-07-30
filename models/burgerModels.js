//Import the ORM to create functions for the database.
const orm = require("../config/orm.js");

const burger = {
    all() {
        return orm.selectAll();
    },
    //Variable, Cols, and Vals as Arrays.
    create(burger_name) {
        return orm.insertOne(burger_name);
    },
    update(condition) {
        return orm.updateOne(condition);
    },
};

//Export the database functions for the controller
module.exports = burger;