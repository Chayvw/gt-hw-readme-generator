const inquirer = require('inquirer');
const fs = require('fs');
// const readME = require('./readME');
 
 
// array of questions for user
const questions = [
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
    {
        type: "input",
        message: "What is your project name? ",
    name: "title"
    },
    // fix 
    {
        type: "input",
        message: "What are the steps to install the application?",
    name: "installation"
    },

    {
        type: "input",
        message: "Write a short description of your project",
    name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have? ",
        choices: [ "a", "b", "charlie"],
    name: "license"
    },
    {
        type: "input",
        message: "What command should your project run to install dependencies? ",
    name: "dependencies"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo? ",
    name: "repo"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo ",
    name: "contributing"
    },
    {
        type: "input",
        message: "What would a test run off the app entail ?",
    name: "test"
    }

];
inquirer.prompt(questions)
 .then((response)=>{
     console.log(response)
     writeToFile("samplereadme.md",response)

 })
// function to write README file
function writeToFile(fileName, data) {
    console.log(fileName, data)
    console.log("In writeToFile")
    fs.writeFileSync(fileName, createReadMe(data), function (err) {
        if (err) { console.log(err.message) }
        else { console.log("Story Saved") }
      })
}
 function createReadMe(newData){
    const { userName, email, title, description, license, dependencies, repo, contributing} = newData;

    return `
      
    # ${title.charAt(0).toUpperCase() + title.slice(1)}

## ${description}
## Table of Contents


* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

## Usage 

## Credits

## License

## Badges

## Contributing

## Tests

`

 }

// function to initialize program
function init() {

}

// function call to initialize program
// init();
