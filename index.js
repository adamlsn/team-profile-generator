//GLOBAL VARS
const inquirer = require("inquirer");
const fs = require("fs");

//OBJECTS
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const { off } = require("process");
let teamMembers = [];

//FIRST PROMPT
function init() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your team name?",
            name: "teamName"
        }
    ])
    .then(function(data) {
        const teamName = data.teamName;
        teamMembers.push(teamName);
        addMngr();
    })
};

//ADD MANAGER
function addMngr() {
    console.log("What is the Manager's")
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Name:",
        },
        {
            type: "input",
            name: "id",
            message: "ID:",
        },
        {
            type: "input",
            name: "email",
            message: "email:",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Office Number:",
        },
    ])
    .then(function(data){
        const name = data.name;
        const id = data.name;
        const email = data.email;
        const officeNumber = data.officeNumber;
        const teamMember = new Manager(name, id, email, officeNumber);
        teamMembers.push(teamMember);
    })
}

init();