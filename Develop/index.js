// get required packages
const inquirer = require("inquirer");
const fs = require("fs");

// import internal modules
const generateMarkdown = require("./utils/generateMarkdown");
const getAllLicences = require("./utils/generateMarkdown");

const licences = generateMarkdown.licenses;

console.log(licences);

// array of questions for user input
const questions = [
  {
    type: "input",
    name: "githubUsername",
    message: "What's your github username?",
  },
  {
    type: "input",
    name: "githubRepoName",
    message:
      "If this project has a github repository, put its name here (not its URL):",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of this project?",
  },
  {
    type: "input",
    name: "tagline",
    message: "Write a tagline for your project:",
  },
  {
    type: "input",
    name: "motivation",
    message: "What motivated you to create this project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description for your project:",
  },
  {
    type: "checkbox",
    name: "builtWith",
    message:
      "What major frameworks/libraries did you use to bootstrap your project?",
    choices: [],
  },
  {
    type: "input",
    name: "usage",
    message: "Write some instructions on how to use your code:",
  },
  {
    type: "list",
    name: "license",
    message: "What license ",
    choices: getAllLicences(),
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

// init()

console.log(getAllLicences())