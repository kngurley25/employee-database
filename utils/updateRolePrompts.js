const Query = require("../lib/Query");
const employees = [];
const roles = [];

new Query().getManagerFullNames()
    .then(([rows, fields]) => { 
        const managersArray = rows.map(obj => {
            return obj.full_name;
        })
        for (let i = 0; i < managersArray.length; i ++) {
            const listItem = managersArray[i];
            employees.push(listItem);
        }
    })
    
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

const updateRolePrompts = [
    {
        type: "list",
        name: "employee",
        message: "Which employee will be updated?",
        choices: employees
    },
    {
        type: "list",
        name: "role",
        message: "Assign selected employee new role:",
        choices: roles
    }
]

module.exports = updateRolePrompts;