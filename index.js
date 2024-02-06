const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user 
const questions = [
  {
    type: 'input',
    message: 'What is the Title of your project?',
    name: 'title',
  },
  {
    type:'input',
    message:'Enter a description of your project:',
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
    choices: ['MIT', 'The Unlicense', 'Apache License 2.0'],
  },
  {
    type: 'input',
    name: 'contributing',
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

function getLicenseBadge (license) {
  if (license === 'MIT') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg';
  } else if (license === 'The Unlicense') {
    return 'https://img.shields.io/badge/license-Unlicense-blue.svg';
  } else if (license === 'Apache License 2.0') {
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
  } else {
    return '';
  }
}

inquirer.prompt(questions).then((answers) => {
  const {title, description, installation, usage, license, contributing, gitHubUsername, emailAddress} = answers; 

  const badgeURL = getLicenseBadge(license);

   // Generate the content for README.md
   let content = `# ${title}\n\n`;

    // Add license badge image
  if (badgeURL) {
    content += `![License](${badgeURL})\n\n`;
  }

   // Add Table of Contents
   content += '## Table of Contents\n\n';
   content += `- [Description](#description)\n`;
   content += `- [Installation](#installation)\n`;
   content += `- [Usage](#usage)\n`;
   content += `- [License](#license)\n`;
   content += `- [Contributing](#contributing)\n`;
   content += `- [Tests](#tests)\n`;
   content += `- [Questions](#questions)\n\n`;
 
   // Add Sections
   content += `## Description\n\n${description}\n\n`;
   content += `## Installation\n\n${installation}\n\n`;
   content += `## Usage\n\n${usage}\n\n`;
   content += `## License\n\n${license}\n\n`;
   content += `## Contributing\n\n${contributing}\n\n`;
   content += `## Tests\n\nN/A\n\n`;
   content += `## Questions\n\nIf you have any questions please contact me on GitHub or via email using the links below:\n\nGitHub Username: https://github.com/${gitHubUsername}\nEmail Address: ${emailAddress}\n`;

  fs.writeFile("README.md", content, (err) => {
    if (err) {ß
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

