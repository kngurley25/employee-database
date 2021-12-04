const Query = require("../lib/Query");
const roles = [];
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
    }
]

module.exports = employeePrompts;