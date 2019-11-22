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
        // this sends an html file "index" to the client
        // (browser) along with database info
        res.render("index", hbsObject);
    });
});

router.get("/burgers/:id", function(req, res) {
    console.log(req.params.id);
    res.redirect("/")
})

router.post("/api/burgers", function (req, res) {
    console.log("post req.body: ",req.body);
    let tableName = "burgers"
    // burger_name and devoured are column headers
    // in mySQL
    let columnNamesArr = ["burger_name", "devoured"];
    // req.body.burger_namez comes from
    // html input name attribute
    let colValsArr = [req.body.burger_namez, false];

    burger.insertOne(tableName, columnNamesArr, colValsArr, function (result) {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var tableName = "burgers";
    // devoured: true for columnValsObj
    var setClause = `devoured=true`
    // let id = req.params.id;
    var whereClause = `id = ${req.params.id}`
  
    console.log("condition", whereClause);
    console.log("from controller",tableName, setClause, whereClause)
    burger.updateOne(tableName,
        setClause, whereClause, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;