// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import {renderLicenseBadge} from './utils/generateMarkdown.js';

const generateMarkdown = ({ title, description, installation, usage, credits, license, badges, features, contribute, tests }) =>
`# <${title}>

## Description

${description}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    '''md
    ![alt text](assets/images/screenshot.png)
    '''

## Credits

${credits}

## License

${license}

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

${badges}

## Features

${features}

## How to Contribute

${contribute}

## Tests

${tests}`;

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this project best used for?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list your collaborators.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please list the licenses of your project.',
        choices: ['Apache', 'MIT', 'IBM'],
    },
    {
        type: 'input',
        name: 'badges',
        message: 'Please list badges.',
    },
    {
        type: 'input',
        name: 'features',
        message: 'Please list the features of your project.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Tell other developers how they can contribute to your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you run tests for your project?',
    },
])
.then((answers) => {
    const markdownPageContent = generateMarkdown(answers);

    fs.writeFile('README.md', markdownPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
});

// const questions = [{
//     type: "input",
//     name: "title",
//     message: "What is your project called?"
// },
// {
//     type: "input",
//     name: "description",
//     message: "Describe the project."
// }, //and more!!
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // seems like it should call fs.writeFile
}

// TODO: Create a function to initialize app
function init() {
    // this will probably call inquirer.prompt(...).then(...)
}

// Function call to initialize app
init();
