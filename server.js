const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "employee_tracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    
    runProgram();
});

function runProgram() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                choices: ["Add a department", "Add a role", "Add an employee", "View departments", "View roles", "View employees", "Update employee role",],
                name: "prompt"
            },

        ])

        .then(function (res) {
            switch (res.prompt) {
                case "Add a department":
                    console.log("You are about to add department.")
                    addDepartment();
                    break;
                case "Add a role":
                    console.log("You are about to add a role.")
                    addRole();
                    break;
                case "Add an employee":
                    console.log("You are about to add an employee.")
                    addEmployee();
                    break;
                case "View departments":
                    console.log("You are about to view all departments.")
                    viewDepartments();
                    break;
                case "View roles":
                    console.log("You are about to view all roles.")
                    viewRoles()
                    break;
                case "View employees":
                    console.log("You are about to view all employees")
                    viewEmployees();
                    break;
                case "Update an employee role":
                    console.log("You are about to update an employee role.")
                    updateEmployeeRole();
                    break;
            }
            console.log(response.addViewUpdate);
        });
}
