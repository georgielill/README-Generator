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
// - Contributing / 
// - Tests - N/A
// - Questions / 
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
    message: 'Enter installation instructions:',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Enter usage instructions:',
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
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'gitHubUsername',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'emailAddress',
    message: 'What is your email address?'
  }
];

inquirer.prompt(questions).then((answers) => {
  const {title, description, installation, usage, license, contributions, githubUsername, emailAddress} = answers; 

  const content = `# ${title}\n\n` +
  `## Description\n\n${description}\n\n` +
  `## Installation\n\n${installation}\n\n` +
  `## Usage\n\n${usage}\n\n` +
  `## License\n\n${license}\n\n` +
  `## Contributions\n\n${contributions}\n\n` +
  `## Questions\n\nGitHub Username: ${githubUsername}\nEmail Address: ${emailAddress}\n`;

  fs.writeFile("README.md", content, (err) => {
    if (err) {
      console.log('Error:');
    }
    else {
      console.log('README.md successfully created!');
    }
  })
})

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {

}

// function call to initialize program
init();

