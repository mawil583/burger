var orm = require("../config/orm.js");

var burger = {
    selectAll: function(tableName, cb) {
      orm.selectAll(tableName, function(res) {

        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(tableName, columnValsObj, condition, cb) {
        console.log("from burger.js", columnValsObj, condition)

      orm.updateOne(tableName, columnValsObj, condition, function(res) {

        cb(res);

      });
    }
  };

  module.exports = burger;