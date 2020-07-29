const express = require("express");

const router = express.Router();

//Import the model
const burger = require("../models/burgerModels.js");

//Create routes
router.get("/", function(req, res) {
    burger.all(function(data) {
        res.render("index", { burgers: data});
        console.log(data);
    });
});

//Create a new burger
router.post("/api/burger", function(req, res) {
    burger.create([req.body.name], function(result) {   
        res.json(result);
        console.log(result);
    })
});


router.delete("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

//Export rountes for server.js.
module.exports = router;