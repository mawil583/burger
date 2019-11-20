let express = require("express");
var router = express.Router();
let burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.get("/burgers/:id", function(req, res) {
    // burger.updateOne()
    console.log(req.params.id);
    res.redirect("/")
})

router.post("/api/burgers", function (req, res) {
    console.log(req.body);
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, true
    ], function (result) {
        // Send back the ID of the new quote
        res.redirect("/");
    });
});

module.exports = router;