// import pacakges
const inquirer = require("inquirer");

// import module references
const Query = require("./lib/Query");
const actionPrompts = require("./utils/actionPrompts");

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

    switch (action) {
        case "View all departments":
            const query = new Query();
            query.getDepartments();
            break;
        case "View all roles":
            getRoles();
            break;
        case "View all employees":
            getEmployees();
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
            console.log("test two");
    }
}

init();
