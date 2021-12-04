// import packages
const cTable = require("console.table");
const inquirer = require("inquirer");

// import module references
const db = require("../db/connection");
const actionPrompts = require("../utils/actionPrompts");

// hold functions for mysql queries
class Query {
    constructor() {

    }

    getDepartments() {
        const sql = ("SELECT * FROM departments");
        return db.promise().query(sql);
        // .then(([rows, fields]) => {
        //     console.table(rows);
        // })
    }

    getRoles() {
        const sql = "SELECT * FROM roles";
        db.query(sql, function (err, results) {
        console.table(results);
    })
    }

}

// export to index module
module.exports = Query;