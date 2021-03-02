const inquirer = require('inquirer');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const fs = require('fs');
const generatePage = require('../src/page-template.js');
const { rejects } = require('assert');
const { resolve } = require('path');

function Team() {
    this.team = [];
}

Team.prototype.getEmployeeInfo = function() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter employee's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee's ID number.",
            validate: idInput => {
                if (isNaN(idInput) || !idInput) {
                    console.log('You must enter an employee ID.')
                    return false;
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter employee's email address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('You must enter an email address.')
                    return false;
                }
            }
        }
    ])  
};

Team.prototype.getManager = function() {
    console.log("Enter your Team Manager's information");

    this.getEmployeeInfo()
        .then(manager => {
            let newManager = new Manager(manager);
            
            inquirer.prompt({
                type: 'input',
                name: 'officeNum',
                message: "Enter employee's office number.",
                validate: officeInput => {
                    if (isNaN(officeInput) || !officeInput) {
                        console.log('You must enter an office number.')
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            })
            .then(({officeNum}) => {
                newManager.officeNum = officeNum;
                this.team.push(newManager);
                this.getTeam();
            })
        })   
};

Team.prototype.getTeam = function() {
    inquirer.prompt({
        type: 'list',
        name: 'next',
        message: 'What would you like to do next?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building team']
    })
    .then(next => {
        if (next.next === 'Add an Engineer') {
            this.getEngineer();
        }
        else if (next.next === 'Add an Intern') {
            this.getIntern();
        }
        else {
            this.finishTeam();
        }
    })
};

Team.prototype.getEngineer = function() {
    console.log("Enter your Engineer's information");

    this.getEmployeeInfo()
        .then(engineer => {
            let newEngineer = (new Engineer(engineer));
            
            inquirer.prompt({
                type: 'input',
                name: 'github',
                message: "Enter employee's GitHub username.",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    }
                    else {
                        console.log('You must enter a GitHub account.')
                        return false;
                    }
                }
            })
            .then(({github}) => {
                newEngineer.github = github;
                this.team.push(newEngineer);
                this.getTeam();
            })
        })   
};

Team.prototype.getIntern = function() {
    console.log("Enter your Intern's information");

    this.getEmployeeInfo()
        .then(intern => {
            let newIntern = (new Intern(intern));
            
            inquirer.prompt({
                type: 'input',
                name: 'school',
                message: "Enter the name of your Intern's school.",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    }
                    else {
                        console.log("You must enter the name of this Intern's school.");
                        return false;
                    }
                }
            })
            .then(({school}) => {
                newIntern.school = school;
                this.team.push(newIntern);
                this.getTeam();
            })
        })   
};

Team.prototype.finishTeam = function() {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', generatePage(this.team), err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Your team profile has been generated! Check the /dist directory.'
            })
        });
    })
};

module.exports = Team;