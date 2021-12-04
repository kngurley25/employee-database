// import module references
const db = require("../db/connection");

// hold functions for mysql queries
class Employee {
    constructor(firstName, lastName, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }
    getRoleId() {
        const sql = `SELECT id FROM roles WHERE title = ?`;
        const params = this.role;
        return db.promise().query(sql, params);
    }
    // getManagerId() {
    //     const sql = `SELECT id FROM employees WHERE full_name = ?`;
    //     const params = this.manager;
    // }
    addEmployee(role_id) {
        const sql = `INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)`;
        const params = [
            this.firstName,
            this.lastName,
            role_id
        ]
        return db.promise().query(sql, params);
    }
}

// export to index module
module.exports = Employee;