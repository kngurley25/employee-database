// import module references
const db = require("../db/connection");

// hold functions for mysql queries
class Query {
    constructor() {

    }
    getDepartments() {
        const sql = `SELECT * FROM departments`;
        return db.promise().query(sql);
    }
    viewRoles() {
        const sql = `SELECT roles.*, departments.name AS department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id`;
        return db.promise().query(sql);
    }
    getRoles() {
        const sql = `SELECT * FROM roles`;
        return db.promise().query(sql);
    }
    viewEmployees() {
        const sql = `SELECT employees.*, roles.title AS title_name FROM employees LEFT JOIN roles ON employees.role_id = roles.id`;
        return db.promise().query(sql);
    }
    getEmployees() {
        const sql = `SELECT * FROM employees`;
        return db.promise().query(sql);
    }
    getManagerFullNames() {
        const sql = `SELECT CONCAT (first_name, " ", last_name) AS full_name FROM employees`;
        return db.promise().query(sql);
    }
}

// export to modules
module.exports = Query;