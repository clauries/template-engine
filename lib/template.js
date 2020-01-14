const inquirer = require("inquirer");
const fs = require("fs");
const mainDoc = require("./template-main");
//const engineerCard = require("./template-engineer");
//const internCard = require("./template-intern");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class Template {

    constructor() {
        this.manager = [];
        this.engineers = [];
        this.interns = [];
    }
    // Questions for manager
    // write the main html document using writeHTML() 
    // .then addEmployee()
    managerQs() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is name of the employee managing the team?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?"
            }
        ]).then(res => {
            const { name, id, email, officeNumber } = res;
            this.manager.push(
                new Manager(name, id, email, officeNumber)
            );
            console.log(this.manager);
            this.addEmployee();
        });
    }

    // Questions for engineer
    // Append to the HTML document using appendCard() 
    // .then addEmployee()
    engineerQs() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineers's email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineer's GitHub user name?"
            }
        ]).then(res => {
            const { name, id, email, github } = res;
            this.engineers.push(
                new Engineer(name, id, email, github)
            );
            console.log(this.engineers);
            this.addEmployee();
        });
    }

    // Questions for intern
    // Append to the HTML document using appendCard() 
    // .then addEmployee()
    internQs() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email?"
            },
            {
                type: "input",
                name: "school",
                message: "Where does the intern attend school?"
            }
        ]).then(res => {
            const { name, id, email, school } = res;
            this.interns.push(
                new Intern(name, id, email, school)
            );
            console.log(this.interns);
            this.addEmployee();
        });
    }

    // Write HTML to new document in the output folder
    writeHTML() {
        console.log("writeHTML");
        //console.log(this.manager);
        //mainHTML(this.manager);
        //for (i = 0; i < )
        //const teamSize = 1 + engineers.length + interns.length;
    }

    quit() {
        this.writeHTML()
        console.log("File saved to ./output. Please open to see your team!");
        //process.exit(0);
    }

    // Question for adding another engineer, intern or none if statements
    // Will prompt for next employee to add or end the program
    addEmployee() {
        return inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: "What is the role of the next employee?",
                choices: [
                    "Engineer",
                    "Intern",
                    "No other employees to add. Please create my team's list."
                ]
            }
        ]).then((res) => {
            console.log(res);
            if (res.role == "Engineer") {
                this.engineerQs();
            } else if (res.role == "Intern") {
                this.internQs();
            } else {
                // End the node program
                console.log("Thank you!")
                this.quit();
            };
        });
    }


    // // Append card to main html file

    // appendCard(card) {
    //     console.log("Appended card")
    // }



}

module.exports = Template;