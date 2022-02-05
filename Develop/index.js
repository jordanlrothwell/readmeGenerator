// get required packages
const inquirer = require("inquirer");
const fs = require("fs");

// import internal modules
const generateMarkdown = require("./utils/generateMarkdown");

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
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return new Error(err);
    }

    console.log(`Success! Your README has been saved to XXXX`);
  });
}

// function which returns user input as promise
const getUserInput = new Promise((resolve, reject) => {
  const userPrompt = inquirer.prompt(questions);
  if (userPrompt) {
    resolve(userPrompt);
  } else {
    reject(new Error("No user input."));
  }
});

// TODO: Create a function to initialize app

const init = function () {
  getUserInput()
    .then((result) => {
      return generateMarkdown(result);
    })
    .then((md) => {writeToFile('testREADME.md', md)});
};

// Function call to initialize app
init();
