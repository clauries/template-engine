const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const mainHTML = require("./template-main");
const engineerHTML = require("./template-engineer");
const internHTML = require("./template-intern");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

class Template {

    constructor() {
        this.manager = [];
        this.engineers = [];
        this.interns = [];
    }
    // Questions for manager
    // .then use addEmployee() to add another employee or write the document
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
    // .then use addEmployee() to add another employee or write the document
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
    // .then use addEmployee() to add another employee or write the document
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
    generateHTML() {
        // Interpolate the manager array with the HTML
        const man = this.manager[0];
        const eng = this.engineers;
        const internCard = this.interns[0];
        writeFileAsync("./output/index.html", mainHTML(man))
        // .then (
        //     appendFileAsync("./output/index.html", engineerHTML(eng[0]))
        // )

        //Interpolate the engineers array with the HTML
        // const eng = this.engineers;
        // const engineerCards = eng.map((engineer) => {
        //     engineerHTML(engineer)
        // console.log("engineer name: ", eng.name)
        // console.log("engineer id: ", eng.id);
        // console.log("engineer email: ", eng.email);
        // console.log("engineer github: ", eng.github); 
        // });
        // console.log("eng: ", eng);
        // console.log("engineerCards: ", engineerCards);
        

        
        //Interpolate the interns array with the HTML
        // const internCard = this.interns[0];
        // internHTML(internCard);

        
        // console.log("intern name: ", internCard.name)
        // console.log("intern id: ", internCard.id);
        // console.log("intern email: ", internCard.email);
        // console.log("intern school: ", internCard.school);
        

        //for (i = 0; i < )
        //const teamSize = 1 + engineers.length + interns.length;
    }

    render() {
        this.generateHTML()
            // .then(
            //     console.log("File saved to ./output. Please open to see your team!")
            // )
        //     .catch(function (err) {
        //         console.log(err);
        //     });
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
                this.render();
            };
        });
    }


    // // Append card to main html file

    // appendCard(card) {
    //     console.log("Appended card")
    // }



}

module.exports = Template;