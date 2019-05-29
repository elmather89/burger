// Controller setup
// Inside your burger directory, create a folder named controllers.
// In controllers, create the burgers_controller.js file.

// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

console.log("controllers connected");

// get =======================================
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// post =======================================
router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

// update =======================================
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    
    console.log(condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

// delete =======================================
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log(condition);

    burger.deleteOne(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

// export the router at the end of your file.
module.exports = router;