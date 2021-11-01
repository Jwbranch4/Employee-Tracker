const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // {TODO: Add your MySQL password}
    password: "Iceman2010",
    database: "employee_tracker_db",
  },
  console.log(`Connected to the employee_tracker database.`)
);

let questions = [
  {
    type: "list",
    message: "Please select what you want to do.",
    name: "WhatToDo",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update an employee",
    ],
  },
  {
    type: "input",
    message: "Please name the department you want to add.",
    name: "AddDepartment",
  },
];

function getData() {
  return inquirer.prompt(questions).then((answers) => {
    if (answers.WhatToDo === "view all departments") {
      db.query("SELECT * FROM department", function (err, results) {
        if (err) {
          console.log(err);
          return getData();
        }
        console.table(results);
        return getData();
      });
      console.table(answers.WhatToDo);
    } else if (answers.WhatToDo === "view all roles") {
      db.query(
        "select roles.id, roles.title, roles.salary, roles.department_id, department.department_name from roles inner join department on roles.department_id = department.id;",
        function (err, results) {
          if (err) {
            console.log(err);
            return getData();
          }
          console.table(results);
          return getData();
        }
      );
      console.table(answers.WhatToDo);
    } else if (answers.WhatToDo === "view all employees") {
      db.query(
        " SELECT employee.id, employee.first_name, employee.last_name, employee.roles_id, roles.title, roles.salary, roles.department_id, department.department_name, employee.manager_id FROM employee INNER JOIN roles on employee.roles_id = roles.id INNER JOIN department on roles.department_id = department.id;",
        function (err, results) {
          if (err) {
            console.log(err);
            return getData();
          }
          console.table(results);
          return getData();
        }
      );
      console.table(answers.WhatToDo);
    } else if (answers.WhatToDo === "add a department") {
      db.query(
        `INSERT INTO department (department_name) VALUES ('${answers.AddDepartment}');`,
        function (err, results) {
          if (err) {
            console.log(err);
            return getData();
          }
          console.table(results);
          return getData();
        }
      );
      console.table(answers.WhatToDo);
    } else if (answers.WhatToDo === "add a role") {
      console.log(answers.WhatToDo);
    } else if (answers.WhatToDo === "add an employee") {
      console.log(answers.WhatToDo);
    } else if (answers.WhatToDo === "update an employee") {
      console.log(answers.WhatToDo);
    }
  });
}

getData();
