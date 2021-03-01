class Employee {
    constructor(member) {
        this.name = member.name;
        this.id = member.id;
        this.email = member.email;
    }

    getName() {
        return this.name
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;