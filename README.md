
  # Team Portfolio Generator

  

  ## Description
  
  This node application allows for a user to quickly create an HTML page that displays a variety of employee data. That info can include position in company, company ID number, email, office number (for manager), GitHub username (for engineer), and School (for intern). After entering all desired data an HTML page will be generated appropriately with live links, and some minor styling. I did struggle with making styling more efficient and pretter. That is something that I would like to return to in the future.

  ## Table of Contents
  
  * [Installation](#installation)
  * [Demonstration](#demonstration)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  this project requires `node`, and in addition an `npm install` of `inquirer` and `jest`. The `package.json` has already been edited to include `jest` as the default test environment.

  ## Demonstration

  ![./gifs/demo.gif](./gifs/demo.gif)

  ## Usage
  
  As stated above, the primary use of this project is to create a custom employee page for a user. To go into a bit greater detail, the node application starts with a prompt for a team name. That name is used as the header of the page, name of the site, and name of the HTML file. The initial prompt will always be that for a manager role. Following the manager, the user can enter as many engineers and interns as they would like. Upon finishing their desired amount of employees they can select the `"No other members, generate site"` option. This will create the webpage of cards with all the collected data. In addition, any email will be populated with a clickable link that will open the users default mail engine. All GitHub usernames (if entered correctly) will populate a link to the corresponding GitHub page. All information taken in will be populated into the appropriate fields in verbatim.

  ## Tests
  
  There are four tests for this project, one for each object. They are run on the `node` plugin, `jest`. To run any of the tests please first install `npm i jest`. To run a test, run the command `npm run <filename or test>` within the __tests__ directory. The four objects you can test are: Employee, Manager, Engineer, and Intern

  ## Questions
  
  Reach out to me at the links below with any questions, comments, or concerns:

  GitHub: [adamlsn](https://github.com/adamlsn)</br>
  email: [adamlsn@gmail.com](mailto:adamlsn@gmail.com)
  