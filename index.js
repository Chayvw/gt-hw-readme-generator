const inquirer = require('inquirer');
const fs = require('fs');
// const readME = require('./readME');


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project name? ",
        name: "title"
    },
    {
        type: "input",
        message: "Write a short description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "What command should your project run to install dependencies? ",
        name: "installation"
    },

    {
        type: "input",
        message: "What is your Github username?",
        name: "userName"
    },

    {
        type: "input",
        message: "What is your email address? ",
        name: "email"
    },

    // fix 
    {
        type: "input",
        message: "What are the steps to install the application?",
        name: "installation"
    },

    {
        type: "list",
        message: "Choose the license  you would like to use the MIT or Eclipse license and badge? ",
        choices: ["[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)GNU"],
         name: "license"
    },

    {
        type: "input",
        message: "What does the user need to know about using the repo? ",
        name: "repo"
    },

    {
        type: "input",
        message: "Who does the user want to credit on the repo ? ",
        name: "credits"
    },
    {
        type: "input",
        message: "What would a test run off the app entail ?",
        name: "test"
    }

];
inquirer.prompt(questions)
    .then((response) => {
        console.log(response)
        writeToFile("samplereadme.md", response)
    })
    .catch(function (err) {
        console.log(err);

    }

    );
// function to write README file
function writeToFile(fileName, data) {
    console.log(fileName, data)
    console.log("In writeToFile")
    fs.writeFileSync(fileName, createReadMe(data), function (err) {
        if (err) { console.log(err.message) }
        else { console.log("Story Saved") }
    })
}
function createReadMe(newData) {
    const { userName, email, title, description, installation, usage, license, dependencies, repo, contributing, test, credits } = newData;

    return `
      
    # ${title.charAt(0).toUpperCase() + title.slice(1)}

## Description
${description}
## Table of Contents


* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${installation}

## Usage 
${usage}


## Credits
${credits}

## License
${license}

## Badges

## Contributing
${contributing}

## Tests
${test}

#Questions
If you have any questions please feel free to reach out to me via my email ${email} or directly through my GitHub profile (http://github.com/${userName})
`

}

// // function to initialize program
// function init() {

// }

// function call to initialize program
// init();
