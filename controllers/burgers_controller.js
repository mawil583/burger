let express = require("express");
var router = express.Router();
let burger = require("../models/burger.js");

router.get("/", function (req, res) {
    //selectAll is from models/burger.js
    let tableName = "burgers";
    burger.selectAll(tableName, function (data) {
    // the function parameter "data" returns all data in 
    // database (array of objects)

    // since render can only accept an object, we need to
    // wrap the array in an abject before sending it
        var hbsObject = {
            burger: data
        };
        console.log("GETdata",hbsObject);
        // this sends and html file "index" to the client
        // (browser) along with database info
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
    // burger_name and devoured are columns
    // in mySQL
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        // req.body.burger_name comes from
        // html input name attribute
        req.body.burger_name, false
    ], function (result) {
        // Send back the ID of the new quote
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var tableName = "burgers";
    // devoured: true for columnValsObj
    var columnValsObj = `devoured=true`
    // let id = req.params.id;
    var condition = `id = ${req.params.id}`
  
    console.log("condition", condition);
    console.log("from controller",tableName, columnValsObj, condition)
    burger.updateOne(tableName,
    columnValsObj, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;