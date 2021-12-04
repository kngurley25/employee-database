const cTable = require("console.table");

const db = require("../db/connection");

const getDepartments = function() {
    const sql = "SELECT * FROM departments";
    db.promise().query(sql)
    .then(([rows, fields]) => {
        console.table(rows);
    })
    .then(() => db.end())
    .then(() => {
        console.log("this here");
    })
}

const getRoles = function() {
    const sql = "SELECT * FROM roles";
    db.query(sql, function (err, results) {
        console.table(results);
    })
}

const getEmployees = function() {
    const sql = "SELECT * FROM employees"
    db.query(sql, function (err, results) {
        console.table(results);
    })
}


module.exports = {
    getDepartments,
    getRoles,
    getEmployees
};
