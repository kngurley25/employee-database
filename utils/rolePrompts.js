const Query = require("../lib/Query");
const departments = [];
new Query().getDepartmentChoices()
    .then(([rows, fields]) => {
        const departmentArray = rows.map(obj => {
            return obj.name;
        })
        for (let i = 0; i < departmentArray.length; i ++) {
            const listItem = departmentArray[i];
            departments.push(listItem);
        }
    })


const rolePrompts = [
    {
        type: "input",
        name: "role",
        message: "Enter the name of the role:",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter role name:");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "salary",
        message: "Enter salary for role:",
        validate: salary => {
            if (isNaN(salary)) {
                console.log("Enter a valid salary number");
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: "list",
        name: "department",
        message: "Which department does the role belong to?",
        choices: departments
    }
]

module.exports = rolePrompts;