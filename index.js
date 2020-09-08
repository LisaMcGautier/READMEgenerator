const inquirer = require("inquirer");
const fs = require("fs");
const { getMaxListeners } = require("process");
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
    },
    {
        type: "input",
        message: "Enter a short description of your project.",
        name: "description",
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
        message: "Which technologies were used to build this project?",
        name: "technologies",
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
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        default: "dlanodcm4517@gmail.com"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username",
        default: "lisamcgautier"
    }
];

// function to write README file

inquirer.prompt(questions)
    .then(function (response) {
        writeToFile(response); 
    });

function appendToFile(fileName, readmeText) {
    fs.appendFile(fileName, readmeText, function (error) {
        if (error) {
            console.log("Error: ", error);
        } else {
            console.log("README generated successfully!");
        }
    });
}   

function writeToFile(data) {
    const fileName = "./README.md";

    // create a new variable to hold the right licensing URL image
    let licenseIMG;
    // if statements blocks
    if (data.license == "MIT") {
        licenseIMG = `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`;

    } else if (data.license == "APACHE 2.0") {
        licenseIMG = `![GitHub license](https://img.shields.io/badge/license-Apache-blue.svg)`;

    } else if (data.license == "GPL 3.0") {
        licenseIMG = `![GitHub license](https://img.shields.io/badge/license-GPL%20(%3E%3D%202)-blue.svg)`;

    } else if (data.license == "BSD 3") {
        licenseIMG = `![GitHub license](https://https://img.shields.io/badge/license-BSD-green.svg)`;

    } else {
        licenseIMG = `No license selected`;
    }

    // README template to hold the formatting of the file; template literals to hold the values entered by the user
    let readmeContents = `# ${data.title}
${licenseIMG}

## Description

${data.description}

## Table of Contents

* [Technologies](#technologies)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)


## Technologies

The following technologies were used to create this project:

\`\`\`
${data.technologies}
\`\`\`

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}

You can find more of my work at [GITHUBrepo](https://github.com/${data.username})`

    console.log("Generating README...");

    appendToFile(fileName, readmeContents);
}


// function to initialize program
function init() {

}

// function call to initialize program
init();


// title = ${data.title};
// description = ${data.description};
// license = ${data.license};
// install = ${data.install};
// testing = ${data.testing};
// usingRepo = ${data.usingRepo};
// contributeRepo = ${data.contributeRepo};
// email = ${data.email};
// username = ${data.username}