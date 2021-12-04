// import module references
const Choices = require("inquirer/lib/objects/choices");
const db = require("../db/connection");

// hold functions for mysql queries
class Query {
    constructor() {

    }
    getDepartments() {
        const sql = `SELECT * FROM departments`;
        return db.promise().query(sql);
    }
    getRoles() {
        const sql = `SELECT * FROM roles`;
        return db.promise().query(sql);
    }
    getEmployees() {
        const sql = `SELECT * FROM employees`;
        return db.promise().query(sql);
    }
    getDepartmentNames() {
        const sql = `SELECT name FROM departments`;
        return db.promise().query(sql);
    }
    getRoleTitles() {
        const sql = `SELECT title FROM roles`;
        return db.promise().query(sql);
    }
    getManagerFullNames() {
        const sql = `SELECT CONCAT (first_name, " ", last_name) AS full_name FROM employees`;
        return db.promise().query(sql);
    }

}

// export to modules
module.exports = Query;