const Employee = require("./Employee");

// Creates the class Engineer
// An extension of Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;