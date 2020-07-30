const express = require("express");

const router = express.Router();

//Import the model
const burgers = require("../models/burgerModels.js");

//Create routes
router.get("/", async (_, res) => {
    const burgers = await burger.all();
    res.render("index", { burgers });
});

//Create a new burger
router.post("/api/burgers", async (req, res) => {
    const result = await burger.create([req.body.burger_name]);
    res.json({ id: result.insertId });
});

router.put("/api/burgers/:id", async (req, res) => {
    const condition = "id = " + req.params.id;
    const results = await burger.update(condition);

    if (result.changedRows === 0) {
        return res.status(404).end();
    }
    res.status(200).end();
});

//Export rountes for server.js.
module.exports = router;