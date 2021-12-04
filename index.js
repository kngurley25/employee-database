// import pacakges
const inquirer = require("inquirer");
const cTable = require("console.table");

// import module references
const Query = require("./lib/Query");
const actionPrompts = require("./utils/actionPrompts");
const db = require("./db/connection");

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
            console.log("test two");
        case "Add a role":
            console.log("test two");
        case "Add an employee":
            console.log("test two");
        case "Update employee role":
            console.log("test two");
        case "Quit":
            console.log("Goodbye!");
            db.end();
    }
}

init();
