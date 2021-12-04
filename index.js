const inquirer = require("inquirer");
const actionPrompts = require("./utils/actionPrompts");

const { getDepartments, getRoles, getEmployees } = require("./utils/queries");

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
            getDepartments();
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

initialPrompt();
