// Required node packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Required files 
const mainHTML = require("./template-main");
const engineerHTML = require("./template-engineer");
const internHTML = require("./template-intern");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// Global variables
const writeFileAsync = util.promisify(fs.writeFile);

// Class containing the main programming for the template
class Template {

    constructor() {
        this.manager = [];
        this.engineers = [];
        this.interns = [];
    }

    // Questions for manager
    // After questions, it calls function to add another employee or write the document
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
            this.addEmployee();
        });
    }

    // Questions for engineer
    // After questions, it calls function to add another employee or write the document
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
            this.addEmployee();
        });
    }

    // Questions for intern
    // After questions, it calls function to add another employee or write the document
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
            this.addEmployee();
        });
    }

    // Write HTML to new document in the output folder
    generateHTML() {

        const man = this.manager[0];
        const eng = this.engineers;
        const int = this.interns;

        // Teamsize = 1 manager + x engineers + y interns
        const teamSize = 1 + eng.length + int.length;

        // Creating the cards for engineers
        // If there is at least one engineer stored in the engineers array
        // Map takes the data stored in that array & creates a new array of 
        // the data interpolated in the template literal found in template-engineer.js
        const engCard = eng.map((data) => {
            if (eng.length > 0) {
                return engineerHTML(data);
            } else {
                return "";
            }
        });

        // Creating the cards for interns
        // This uses the same process as eng card above
        const intCard = int.map((data) => {
            if (int.length > 0) {
                return internHTML(data);
            } else {
                return ""
            }
        });

        // Writing the files to the html file
        // If there is already a document created, this will write over any stored data. 
        // Uses the template literal found in template-main.js
        return writeFileAsync("./output/index.html", mainHTML(man, engCard, intCard, teamSize));
    }

    // Will call the function to write the file and let the user know when it is complete
    // If error occurs, the user will be alerted in the console
    render() {
        this.generateHTML()
            .then(function () {
                console.log("File saved to ./output. Please open to see your team!")
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    // Function to add another employee or write the document
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
            if (res.role == "Engineer") {
                this.engineerQs();
            } else if (res.role == "Intern") {
                this.internQs();
            } else {
                // End the node program & create html doc with data
                this.render();
            };
        });
    }
}

module.exports = Template;