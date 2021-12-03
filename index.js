const inquirer = require("inquirer");





const initialPrompt = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "Select which action to take:",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update employee role",
                "Quit"
            ]
        }
    ])
    .then(answer => {
        verifyAction(answer);
    });
};

const verifyAction = (answer) => {
    const action = answer.action;
    console.log(action);
}

initialPrompt();