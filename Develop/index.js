// get required packages
const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user input
const questions = [
  {
    type: "list",
    name: "license",
    message: "",
    choices: [],
  },
  {
    type: "input",
    name: "title",
    message: "",
  },
  {
    type: "input",
    name: "description",
    message: "",
  },
  {
    type: "input",
    name: "usage",
    message: "",
  },
  {
    type: "",
    name: "features",
    message: "",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
