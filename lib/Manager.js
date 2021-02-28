const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);
        this.officeNum = officeNum;
        this.role = this.getRole();
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;