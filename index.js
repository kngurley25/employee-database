// import packages
const inquirer = require("inquirer");
const cTable = require("console.table");

// import module references
const db = require("./db/connection");
const Query = require("./lib/Query");
const Department = require("./lib/Department");
const Role = require("./lib/Role");
const Employee = require("./lib/Employee");

const actionPrompts = require("./utils/actionPrompts");
const departmentPrompts = require("./utils/departmentPrompts");
const rolePrompts = require("./utils/rolePrompts");
const employeePrompts = require("./utils/employeePrompts");
const updateRolePrompts = require("./utils/updateRolePrompts");

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
                initialPrompt();
            })
            break;

        case "Add an employee":
            inquirer.prompt(employeePrompts)
            .then(answer => {
                const employee = new Employee(answer.firstName, answer.lastName, answer.role, answer.manager);
                if (answer.manager != "NONE") {
                   employee.getRoleId()
                   .then(([rows]) => {
                       const roleId = rows.map(obj => {return obj.id})
                       employee.getManagerId()
                       .then(([rows]) => {
                           const managerId = rows.map(obj => {return obj.id})
                           employee.addEmployee(roleId, managerId);
                        })
                    })
                }
                employee.getRoleId()
                .then(([rows]) => {
                    const roleId = rows.map(obj => {
                        return obj.id;
                    })
                    employee.addEmployee(roleId);
                })     
                console.log("Added " + answer.firstName + " to the database");
                initialPrompt();
            })
            break;

        case "Update employee role":
            inquirer.prompt(updateRolePrompts)
            .then(answer => {
                const firstName = answer.employee.split(" ")[0];
                const lastName = answer.employee.split(" ")[1];
                const newRole = answer.role;
                const employeeInst = new Employee(firstName, lastName, newRole);
                employeeInst.getRoleId()
                .then(([rows]) => {
                    const roleId = rows.map(obj => {return obj.id})
                    employeeInst.getEmployeeId()
                    .then(([rows]) => {
                        const employeeId = rows.map(obj => {return obj.id})
                        console.log(employeeId);
                        employeeInst.updateRole(roleId, employeeId)
                    })
                })
                console.log("Employee role updated for " + answer.employee);
                initialPrompt();
            })
            break;

        case "Quit":
            console.log("Goodbye!");
            db.end();
    }
}

init();
