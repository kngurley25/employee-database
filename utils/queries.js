const db = require("../db/connection");

const cTable = require("console.table");

const getDepartments = function () {
    db.query("SELECT * FROM departments", function (err, results) {
        console.table(results);
    })
}

module.exports = getDepartments;
