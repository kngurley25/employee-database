const actionPrompts = [
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
]

module.exports = actionPrompts;