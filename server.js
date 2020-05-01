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
                    console.log("Which department would you like to add?");
                    addDepartment();
                    break;
                case "Add a role":
                    console.log("Which role would you like to add?");
                    addRole();
                    break;
                case "Add an employee":
                    console.log("Which employee would you like to add?");
                    addEmployee();
                    break;
                case "View departments":
                    console.log("Here are all departments.");
                    viewDepartments();
                    break;
                case "View roles":
                    console.log("Here are all roles.");
                    viewRoles();
                    break;
                case "View employees":
                    console.log("Here are all employees");
                    viewEmployees();
                    break;
                case "Update an employee role":
                    console.log("Which employee role would you like to update?");
                    updateEmployeeRole();
                    break;
            }
            console.log(res.prompt);
        });
}

function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Which department would you like to add?",
                name: "department"
            },
        ])
        .then(function (res) {
            console.log(res.department);
            connection.query(
                "INSERT INTO departments SET ?",
                {
                    dept_name: res.department
                },
                function (err) {
                    if (err) throw err;
                    console.log("Success!");
                    runProgram();
                }
            )
        });
}

function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Which role would you like to add?",
                name: "role"
            },
            {
                type: "number",
                message: "What is this role's salary?",
                name: "salary"
            },
            {
                type: "number",
                message: "What is this role's ID number?",
                name: "id"
            },
        ])
        .then(function (res) {
            console.log(res.role);
            connection.query(
                "INSERT INTO roles SET ?",
                {
                    title: res.role,
                    salary: res.salary,
                    dept_id: res.id
                },
                function (err) {
                    if (err) throw err;
                    console.log("Success!");
                    runProgram();
                }
            )
        });
}