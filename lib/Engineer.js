const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(member) {
        super(member);
        this.github = member.github;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;