var orm = require("../config/orm.js");

var burger = {
    selectAll: function(tableName, cb) {
      orm.selectAll(tableName, function(res) {

        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(tableName, columnNamesArr, colValsArr, cb) {
      orm.insertOne(tableName, columnNamesArr, colValsArr, function(res) {
        cb(res);
      });
    },
    updateOne: function(tableName, setClause, whereClause, cb) {
        console.log("from burger.js", setClause, whereClause)

      orm.updateOne(tableName, setClause, whereClause, function(res) {

        cb(res);

      });
    }
  };

  module.exports = burger;