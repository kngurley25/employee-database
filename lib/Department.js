// import module references
const db = require("../db/connection");

// hold functions for mysql queries
class Department {
    constructor(department) {
        this.department = department;
    }
    addDepartment() {
        const sql = `INSERT INTO departments (name) VALUES (?)`;
        const params = this.department;
        return db.promise().query(sql, params);
    }
}

// export to index module
module.exports = Department;