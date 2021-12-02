const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "employees"
    },
    console.log("Connected to database: employees.")
)

module.exports = db;