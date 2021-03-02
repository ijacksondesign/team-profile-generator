const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(employee) {
        super(employee);
        this.github;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return 'https://github.com/' + this.github;
    }
};

module.exports = Engineer;