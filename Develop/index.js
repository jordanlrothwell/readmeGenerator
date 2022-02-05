// get required packages
const inquirer = require("inquirer");
const fs = require("fs");

// import internal modules
const generateMarkdown = require("./utils/generateMarkdown");
const { get } = require("http");

// array of questions for user input
const questions = [
  {
    type: "list",
    name: "license",
    message: "what license",
    choices: ["this one", "or this one"],
  },
  {
    type: "input",
    name: "title",
    message: "what title",
  },
  {
    type: "input",
    name: "description",
    message: "what description",
  },
  {
    type: "input",
    name: "usage",
    message: "how use",
  },
  {
    type: "input",
    name: "features",
    message: "any features?",
  },
];

// function to create README
const writeToFile = function (fileName, content) {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`README successfully created.`);
  });
};

// function to initialize app
const init = function () {
  // get our user input
  inquirer
    .prompt(questions)
    .then((answers) => generateMarkdown(answers))
    .then((mdContent) => writeToFile(`TEST_README.md`, mdContent));
};

// function call to initialize app
init();
