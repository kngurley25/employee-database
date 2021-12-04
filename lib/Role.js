// import module references
const db = require("../db/connection");

// hold functions for mysql queries
class Role {
    constructor(title, salary, department) {
        this.title = title;
        this.salary = salary;
        this.department = department;
    }
    getDepartmentId() {
        const sql = `SELECT id FROM departments WHERE name = ?`;
        const params = this.department;
        return db.promise().query(sql, params);
    }
    addRole(department_id) {
        const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
        const params = [
            this.title,
            this.salary,
            department_id
        ]
        return db.promise().query(sql, params);
    }
}

// export to index module
module.exports = Role;