// import packages
const inquirer = require("inquirer");
const cTable = require("console.table");

// import module references
const db = require("./db/connection");
const Query = require("./lib/Query");
const Department = require("./lib/Department");
const Role = require("./lib/Role");

const actionPrompts = require("./utils/actionPrompts");
const departmentPrompts = require("./utils/departmentPrompts");
const rolePrompts = require("./utils/rolePrompts");

function init () {
    initialPrompt();
}

const initialPrompt = () => {
    inquirer.prompt(actionPrompts)
    .then(answer => {
        verifyAction(answer)
    });
};

const verifyAction = (answer) => {
    const action = answer.action;
    const query = new Query();

    switch (action) {
        case "View all departments":
            query.getDepartments()
            .then(([rows, fields]) => {
                console.table(rows);
                initialPrompt();
            });
            break;

        case "View all roles":
            query.getRoles()
            .then(([rows, fields]) => {
                console.table(rows);
                initialPrompt();
            });
            break;

        case "View all employees":
            query.getEmployees()
            .then(([rows, fields]) => {
                console.table(rows);
                initialPrompt();
            });
            break;

        case "Add a department":
            inquirer.prompt(departmentPrompts)
            .then(answer => {
                const department = new Department(answer.department);
                department.addDepartment();
                console.log("Added " + answer.department + " to the database");
                initialPrompt();
            })
            break;

        case "Add a role":
            inquirer.prompt(rolePrompts)
            .then(answer => {
                const role = new Role(answer.title, answer.salary, answer.department);
                role.getDepartmentId()
                .then(([rows]) => {
                    const departmentId = rows.map(obj => {
                        return obj.id;
                    })
                    role.addRole(departmentId);
                })
                console.log("Added " + answer.title + " to the database");
            })
            break;

        case "Add an employee":
            console.log("test two");
            break;

        case "Update employee role":
            console.log("test two");
            break;

        case "Quit":
            console.log("Goodbye!");
            db.end();
    }
}

init();
