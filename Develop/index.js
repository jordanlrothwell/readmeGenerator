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

// function to create README
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return new Error(err);
    }

    console.log(`Success! Your README has been saved to ${filePath}`)
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
