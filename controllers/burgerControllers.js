const express = require("express");

const router = express.Router();

//Import the model
const burger = require("../models/burgerModels.js");

//Create routes
router.get("/", function(req, res) {
    burger.all(function(data) {
        const burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "name", "readyToEat"
    ], [
        req.body.name, req.body.readyToEat
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    
    console.log("condition", condition);

    burger.update({
        readyToEat: req.body.readyToEat
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Export rountes for server.js.
module.exports = router;