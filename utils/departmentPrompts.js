const departmentPrompts = [
    {
        type: "input",
        name: "department",
        message: "Enter the name of the department:",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter department name:");
                return false;
            }
        }
    }
]

module.exports = departmentPrompts;