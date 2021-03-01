const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name) {
        super(name);
        this.officeNum = this.getOfficeNum();
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNum() {
        return inquirer.prompt({
            type: 'input',
            name: 'officeNum',
            message: "Enter employee's office number. (Required)",
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
    }
};

module.exports = Manager;