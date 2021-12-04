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
        const sql = "SELECT * FROM departments";
        return db.promise().query(sql);
    }
    getRoles() {
        const sql = "SELECT * FROM roles";
        return db.promise().query(sql);
    }
    getEmployees() {
        const sql = "SELECT * FROM employees";
        return db.promise().query(sql);
    }

    

}

// export to index module
module.exports = Query;