const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(member) {
        super(member);
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