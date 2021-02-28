const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
        super(name);
        this.school = school;
        this.role = this.getRole();
    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
};

module.exports = Intern;