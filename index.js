const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./generateMarkdown");

// * The generated README includes the following sections: 

//   * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        default: "TEST"
    },

    {
        type: "input",
        message: "Enter a short description of your project.",
        name: "description",
        default: "TEST"
    },

    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
            "none",
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3"
        ]
    },

    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
        default: "npm install"
    },

    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm test"
    },

    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
        default: "TEST"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing",
        default: "TEST"
    },

    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        default: "TEST"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username",
        default: "TEST"
    }

])
.then(function (response) {
    console.log("Info saved");
    writeToFile(response);
    // fs.writeFile("./README.md", JSON.stringify(response), function(error) {
    //     if(error) {
    //         console.log("Error: ", error);
    //     } else {
    //         console.log("Generating README...");
    //     }
    // })    
});
    


// array of questions for user
const questions = [
]

// function to write README file
function writeToFile(data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
