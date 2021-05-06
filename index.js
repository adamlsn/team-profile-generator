//GLOBAL VARS
const inquirer = require("inquirer");
const fs = require("fs");

//OBJECTS
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
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
        console.log("function works");
        console.log(teamName);
    })
}

init();