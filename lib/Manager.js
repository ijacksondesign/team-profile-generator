const Employee = require('./Employee');

class Manager extends Employee {
    constructor(employee) {
        super(employee);
        this.officeNum = employee.officeNum;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;