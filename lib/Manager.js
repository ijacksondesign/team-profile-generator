const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(employee) {
        super(employee);
        this.officeNum;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;