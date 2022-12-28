// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function userInput(){
    return inquirer.prompt([
  
    {name: 'title',
    message: 'What is the title of this application?',
    type: 'input'},
    {name: 'description',
    message: 'What does this application do?',
    type: 'input'},
    {name: 'install',
    message: 'How do I install this application?',
    type: 'input'},
    {name: 'usage',
    message: 'How do I use this application?',
    type: 'input'},
    {name: 'contributing',
    message: 'How do I contribute to this application?',
    type: 'input'},
    {name: 'testing',
    message: 'How do I test this application?',
    type: 'input'},
    {name: 'username',
    message: 'What is your Github username?',
    type: 'input'},
    {name: 'email',
    message: 'What is your e-mail?',
    type: 'input'},
    {name: 'fileName',
    message: 'What do you want to call this readme?',
    type: 'input'},
])};


