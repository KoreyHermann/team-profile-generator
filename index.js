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

const generateEmployee = () => {
return inquirer.prompt ([
    {
        type: 'list',
        name: 'role',
        message: "Select employee role:",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What's the name of the employee?", 
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the employee's ID.",
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the employee's email.",
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter the employee's github username.",
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school",
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another employee?',
        default: false
    }
])
.then(employeeData => {

    let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
    let employee; 

    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);

        console.log(employee);

    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);

        console.log(employee);
    }

    empArray.push(employee); 

    if (confirmAddEmployee) {
        return addEmployee(empArray); 
    } else {
        return empArray;
    }
})
};

const writeFile = data => {
    fs.writeFile('dist\index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team profiles created")
        }
    })
};

generateManager()
  .then(generateEmployee)
  .then(empArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });
