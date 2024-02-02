const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

// - The title of my project
// - Sections entitled: / 
// - Description / 
// - Table of Contents / 
// - Installation /
// - Usage /
// - License /
// - Contributing
// - Tests
// - Questions
const questions = [
  {
    type: 'input',
    message: 'What is the Title of your project?',
    name: 'title',
  },
  {
    type:'input',
    message:'Enter a description of your project',
    name: 'description',
  },
  {
    type: 'input', 
    message: 'Enter installation instructions',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Enter usage instructions',
    name: 'usage'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license did you use?',
    choices: ['MIT License', 'The Unlicense', 'Apache License 2.0'],
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Enter contribution guidelines',
    choices: ['email', 'text', 'phone'], 
  }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
