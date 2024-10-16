// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is your project called?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.'
    },
]);

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
