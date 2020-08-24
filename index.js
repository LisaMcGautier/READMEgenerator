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



// array of questions for user
const questions = [
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

];

// function to write README file

inquirer.prompt(questions)
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

function appendToFile(fileName, readmeText, questionName) {
    fs.appendFile(fileName, readmeText, function (error) {
        if (error) {
            console.log("Error: ", error);
        } else {
            console.log(questionName + " Saved successfully");
        }
    });

}   


function writeToFile(data) {
    let fileName = "./README.md";

    appendToFile(fileName, `# ${data.title} \n`, data.title);

    if (data.license == "MIT") {
        appendToFile(fileName, `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) \n`, data.license);

    } else if(data.license == "APACHE 2.0") {
        appendToFile(fileName, `![GitHub license](https://img.shields.io/badge/license-Apache-blue.svg) \n`, data.license);

    } else if(data.license == "GPL 3.0") {
        appendToFile(fileName, `![GitHub license](https://img.shields.io/badge/license-GPL%20(%3E%3D%202)-blue.svg) \n`, data.license);

    } else if(data.license == "BSD 3") {
        appendToFile(fileName, `![GitHub license](https://https://img.shields.io/badge/license-BSD-green.svg) \n`, data.license);

    } else {
        appendToFile(fileName, `No license selected \n`, data.license);
    }

    appendToFile(fileName, `## Description \n`, data.description);
    appendToFile(fileName, `${data.description} \n`, data.description);

    appendToFile(fileName, `## Table of Contents \n`, "");

    appendToFile(fileName, `* [Installation](#installation) \n`, "");
    appendToFile(fileName, `* [Usage](#usage) \n`, "");
    appendToFile(fileName, `* [License](#license) \n`, "");
    appendToFile(fileName, `* [Contributing](#contributing) \n`, "");
    appendToFile(fileName, `* [Tests](#tests) \n`, "");
    appendToFile(fileName, `* [Questions](#questions) \n`, "");



};


// function to initialize program
function init() {

}

// function call to initialize program
init();
