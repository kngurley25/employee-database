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
    getRoles() {
        const sql = `SELECT * FROM roles`;
        return db.promise().query(sql);
    }
    getEmployees() {
        const sql = `SELECT * FROM employees`;
        return db.promise().query(sql);
    }
    getDepartmentChoices() {
        return ["one", "two"]
        const sql = `SELECT name FROM departments`;
        db.query(sql, function(err, results) {
            const departmentArray = results.map(obj => {
            return obj.name;
            })
            return departmentArray;
        })
    }

}

// export to modules
module.exports = Query;