const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);
        // this.github = github;
        this.github = 'ijacksondesign';
        this.role = this.getRole();
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;