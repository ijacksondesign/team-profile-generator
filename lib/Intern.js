const Employee = require('./Employee');

class Intern extends Employee {
    constructor(employee) {
        super(employee);
        this.school = employee.school;
    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
};

module.exports = Intern;