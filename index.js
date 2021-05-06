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

//NEW EMPLOYEE
function newEmployee() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another team member?",
            name: "option",
            choices: ["Add an Engineer.", "Add an Intern.", "No other members, generate site."]
        }
    ])
    .then(function(data){
        if(data.option === "Add an Engineer.") addEng();
        if(data.option === "Add an Intern.") console.log("Intern Works");
        if(data.option === "No other members, generate site.") console.log("Generate Site Works");
    })
}

//ADD MANAGER
function addMngr() {
    console.log("=== What is the Manager's ===");
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
        
        newEmployee();
    })
};

//ADD ENGINEER
function addEng() {
    console.log("=== What is the Engineer's ===")
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
            name: "github",
            message: "GitHub username:",
        },
    ])
    .then(function(data){
        const name = data.name;
        const id = data.name;
        const email = data.email;
        const github = data.github;
        let teamMember = new Engineer(name, id, email, github);
        teamMembers.push(teamMember);
        newEmployee();
    })
}

init();