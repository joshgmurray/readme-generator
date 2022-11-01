// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'username',
        default: 'joshgmurray',
        validate: function (answer) {
            if (answer.length < 3) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your email address",
        name: 'email',
        default: 'joshgmurray@gmail.com',
        validate: function (answer) {
            if (answer.length < 3) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your application?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 3) {
                return console.log("A valid application title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your application.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 3) {
                return console.log("A valid application description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Provide install instruction for your application.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide usage information for your applicaiton.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Provide contribution guidelines for your application.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Proviee test instructions for your application.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your application.",
        choices: ['MIT License', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: "Proviee link information for your application.",
        name: 'linnks'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log('file generate error ===', err);
        }
        console.log("Success! Your README.md file has been generated")
    });
}

const writeReadMeFile = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {

        // get readMe data from user input
        const readMeData = await inquirer.prompt(questions);
        console.log("readMe data ===", readMeData);
    
        // generate readMe
        const markdown = generateMarkdown(readMeData);
        console.log(markdown);
    
        // Write markdown to file
        await writeReadMeFile('README.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
