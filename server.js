const express = require("express");
const inquirer = require("inquirer");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

inquirer
  .prompt([
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
  ])
  .then((answers) => {
    if (answers.WhatToDo === "view all departments") {
      console.log(answers.WhatToDo);
    } else if (answers.WhatToDo === "view all roles") {
      console.log(answers.WhatToDo);
    } else if (answers.WhatToDo === "view all employees") {
      console.log(answers.WhatToDo);
    } else if (answers.WhatToDo === "add a department") {
      console.log(answers.WhatToDo);
    } else if (answers.WhatToDo === "add a role") {
      console.log(answers.WhatToDo);
    } else if (answers.WhatToDo === "add an employee") {
      console.log(answers.WhatToDo);
    } else if (answers.WhatToDo === "update an employee") {
      console.log(answers.WhatToDo);
    }
  });
