const db = require("../db/connection");

const cTable = require("console.table");

const getDepartments = function() {
    db.query("SELECT * FROM departments", function (err, results) {
        console.table(results);
    })
}

const getRoles = function() {
    db.query("SELECT * FROM roles", function (err, results) {
        console.table(results);
    })
}

const getEmployees = function() {
    db.query("SELECT * FROM employees", function (err, results) {
        console.table(results);
    })
}

module.exports = {
    getDepartments,
    getRoles,
    getEmployees
}
