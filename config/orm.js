let connection = require("./connection.js");

var orm = {
    selectAll: function (tableName, cb) {
        var query = "SELECT * FROM " + tableName + ";";
        connection.query(query, function (err, sqlData) {
            if (err) {
                throw err;
            }
            cb(sqlData);
        });
    },
    insertOne: function (tableName, columnName, values, cb) {
        
        var queryString =
            `INSERT INTO ${tableName}
             (${columnName}) 
             VALUES ('${values[0]}', ${values[1]})`;

        // queryString += " (";
        // queryString += columnName.toString();
        // queryString += ") ";
        // queryString += "VALUES (";
        // queryString += printQuestionMarks(values.length);
        // queryString += ") ";

        console.log(queryString);

        connection.query(queryString, values, function (err, sqlData) {
            if (err) {
                throw err;
            }
            cb(sqlData);
        });
    },
    updateOne: function (tableName, columnValsObj, condition, cb) {
        var queryString = `
            UPDATE ${tableName} 
            SET (${columnValsObj}) 
            WHERE ${condition}`;
// columnValsObj devoured = true
// where ID = specific burger

        // queryString += " SET ";
        // queryString += objToSql(columnValsObj);
        // queryString += " WHERE ";
        // queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, sqlData) {
            if (err) {
                throw err;
            }
            cb(sqlData);
        });
    }
}
module.exports = orm;