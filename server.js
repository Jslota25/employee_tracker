const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "",
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

        