let connection = require("./connection.js");

var orm = {
    selectAll: function (tableName, cb) {
        var query = `SELECT * FROM ${tableName};`;
        connection.query(query, function (err, sqlData) {
            if (err) {
                throw err;
            }
            cb(sqlData);
        });
    },
    insertOne: function (tableName, columnNamesArr, colValsArr, cb) {
        
        var queryString =
            `INSERT INTO ${tableName}
             (${columnNamesArr}) 
             VALUES ('${colValsArr[0]}', ${colValsArr[1]});`;
        console.log("querystring from insertOne: ", queryString);

        connection.query(queryString, colValsArr, function (err, sqlData) {
            if (err) {
                throw err;
            }
            cb(sqlData);
        });
    },
    updateOne: function (tableName, setClause, whereClause, cb) {
        var queryString = `UPDATE ${tableName} SET ${setClause} WHERE ${whereClause}`;
        console.log(queryString);
        console.log("from orm", tableName, setClause, whereClause)

        console.log("querystring updateOne: "+ queryString);
        connection.query(queryString, function (err, sqlData) {
            if (err) {
                throw err;
            }
            cb(sqlData);
        });
    }
}
module.exports = orm;