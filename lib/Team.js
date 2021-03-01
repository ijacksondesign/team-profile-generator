const inquirer = require('inquirer');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');

function Team() {
    this.team = [];
}

Team.prototype.getManager = function() {
    console.log("Enter your team manager's information");
    this.getEmployeeInfo().then(manager => {
        this.team.push(new Manager(manager));
    })
};

Team.prototype.getEmployeeInfo = function() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter employee's name. (Required)",
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
            message: "Enter employee's ID number. (Required)",
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
            message: "Enter employee's email address. (Required)",
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

module.exports = Team;