const Query = require("../lib/Query");
const roles = [];
const managers = [];
new Query().getRoleTitles()
    .then(([rows, fields]) => {
        const rolesArray = rows.map(obj => {
            return obj.title;
        })
        for (let i = 0; i < rolesArray.length; i ++) {
            const listItem = rolesArray[i];
            roles.push(listItem);
        }
    })
new Query().getManagerFullNames()
    .then(([rows, fields]) => { 
        const managersArray = rows.map(obj => {
            return obj.full_name;
        })
        for (let i = 0; i < managersArray.length; i ++) {
            const listItem = managersArray[i];
            managers.push(listItem);
        }
    })

const employeePrompts = [
    {
        type: "input",
        name: "firstName",
        message: "Enter the first name of the employee:",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter first name:");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "lastName",
        message: "Enter the last name of the employee:",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter last name:");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: roles
    },
    {
        type: "list",
        name: "manager",
        message: "Who is the employee's manager?",
        choices: managers
    }
]

module.exports = employeePrompts;