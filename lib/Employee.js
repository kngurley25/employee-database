// import module references
const db = require("../db/connection");

// hold functions for mysql queries
class Employee {
    constructor(firstName, lastName, role, manager) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.manager = manager;
    }
    getRoleId() {
        const sql = `SELECT id FROM roles WHERE title = ?`;
        const params = this.role;
        return db.promise().query(sql, params);
    }
    getManagerId() {
        const sql = `SELECT id FROM employees WHERE first_name = ? AND last_name = ?`;
        const params = this.manager.split(" ");
        return db.promise().query(sql, params);
    }
    getEmployeeId() {
        const sql = `SELECT id FROM employees WHERE first_name = ? AND last_name = ?`;
        const params = [
            this.firstName,
            this.lastName
        ];
        return db.promise().query(sql, params);
    }
    addEmployee(role_id, manager_id) {
        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
        const params = [
            this.firstName,
            this.lastName,
            role_id,
            manager_id
        ]
        return db.promise().query(sql, params);
    }
    updateRole(role_id, employee_id) {
        const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
        const params = [
            role_id,
            employee_id
        ]
        return db.promise().query(sql, params);
    }
    updateManager(manager_id, employee_id) {
        const sql = `UPDATE employees SET manager_id = ? WHERE id = ?`;
        const params = [
            manager_id,
            employee_id
        ]
        return db.promise().query(sql, params);
    }
}

// export to index module
module.exports = Employee;