const Query = require("../lib/Query");
const employees = [];

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

const updateManagerPrompts = [
    {
        type: "list",
        name: "employee",
        message: "Which employee will be updated?",
        choices: employees
    },
    {
        type: "list",
        name: "manager",
        message: "Assign selected employee new manager:",
        choices: employees
    }
]

module.exports = updateManagerPrompts;