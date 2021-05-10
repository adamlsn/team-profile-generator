//GLOBAL VARS
const inquirer = require("inquirer");
const fs = require("fs");

//OBJECTS
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const teamMembers = [];

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
        if(data.option === "Add an Intern.") addInt();
        if(data.option === "No other members, generate site.") generatePage();
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
        const id = data.id;
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
        const id = data.id;
        const email = data.email;
        const github = data.github;
        let teamMember = new Engineer(name, id, email, github);
        teamMembers.push(teamMember);
        newEmployee();
    })
}

//ADD INTERN
function addInt() {
    console.log("=== What is the Intern's ===")
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
            name: "school",
            message: "School:",
        },
    ])
    .then(function(data) {
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const school = data.school;
        let teamMember = new Intern(name, id, email, school);
        teamMembers.push(teamMember);
        newEmployee();
    });
}

//GENERATE WEBPAGE
function generatePage() {
    //array HTML code is pushed to
    const html = [];
    
    //icons
    const mailIcon = `<i class="fas fa-envelope"></i>`;
    const IDIcon = `<i class="fas fa-id-card"></i>`;
    const managerIcon = `<i class="fas fa-user-tie"></i>`;
    const engineerIcon = `<i class="fas fa-user-cog"></i>`;
    const internIcon = `<i class="fas fa-user-graduate"></i>`;
    const officeIcon = `<i class="fas fa-building"></i>`;
    const githubIcon = `<i class="fab fa-github"></i>`;
    const schoolIcon = `<i class="fas fa-school"></i>`;

    //HTML body
    const htmlHead = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${teamMembers[0]}</title>
        <link rel="stylesheet" href="./css/style.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/52104032b6.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header class="header">
            <h1>${teamMembers[0]}</h1>
        </header>
        <main class="container">`
    html.push(htmlHead);

    //Adding cards
    for(let i = 1; i < teamMembers.length; i++) {
        
        let userIcon = "";
        if(teamMembers[i].title === "Manager") userIcon = managerIcon;
        if(teamMembers[i].title === "Engineer") userIcon = engineerIcon;
        if(teamMembers[i].title === "Intern") userIcon = internIcon;

        let htmlBody = `    
            <div class = "card">
                <div class = "card-header">
                    <h4>${teamMembers[i].name}</h4>
                    <h5>${userIcon} ${teamMembers[i].title}</h5>
                </div>

                <div class = "card-content">
                    <p>${mailIcon} email: <a href="mailto:${teamMembers[i].email}">${teamMembers[i].email}</a></p>
                    <p>${IDIcon} ID: ${teamMembers[i].id}</p>
                
        `;

        //Manager addition
        if(teamMembers[i].officeNumber) {
            htmlBody += `<p>${officeIcon} Office Number: ${teamMembers[i].officeNumber}</p>`
        }
        //Engineer addition
        if(teamMembers[i].github) {
            htmlBody += `<p>${githubIcon} GitHub: <a href="https://github.com/${teamMembers[i].github}">${teamMembers[i].github}</a></p>`
        }
        //Intern addition
        if(teamMembers[i].school) {
            htmlBody += `<p>${schoolIcon} School: ${teamMembers[i].school}</p>`
        }

        htmlBody += (`
            </div>
        </div>
        `)
        html.push(htmlBody)
    }
    html.push(`
        </main>
    </body>
</html>
    `);

    const fileName = teamMembers[0].replace(/\s+/g, "");
    //Writing HTML to index.html
    fs.writeFile(`./dist/${fileName}.html`, html.join(" "), function(err) {});
    console.log(`File generated successfully. Check the "/dist" folder for ${fileName}.html`)
};

init();