const generateHTML = require('src\generateHTML.js');
const manager = require('lib\manager.js');
const engineer = require('lib\engineer.js');
const intern = require('lib\intern.js');
const fs = require('fs');
const inquirer = require('inquirer');
const empArray =[];

const generateManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter manager name here',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter manager ID number here',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter manager email address here',
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter manager office number here',
        }
    ])
    .then (createManager => {
        const { name, id, email, office } = managerInput;
        const manager = new manager (name, id, email, office);
        empArray.push(manager);
    })
};