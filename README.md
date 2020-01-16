# Team Template Engine
A node program providing supervisors with a way to keep accurate team profiles.

## Install & Use
1. Fork and then clone the repo to your computer.
2. In your terminal, navigate to the repo and run "npm install".
3. Once the packages are installed, run the program in the terminal with "node app.js"
4. The program will prompt first for the team manager's info. After answering each question, hit enter to prompt the next question.
5. Next choose if you want to add an engineer or intern. You can add as many as you want in any order. 
6. Once your team is complete, chose the 

## Future Development
* Answer Validation
A useful feature would be answer validation - making sure info is not left blank or that strange characters do not accidentally make it into a name. 

* Choose Team Structure
This program is rigid in that there is only one employee structure with 3 different roles: Manager, engineer, interns. It would be a great feature for the app to launch with choices for what roles are on the team and in what order they should appear on the page. This feature was outside the scope of my original project and user story. However, I can see it being a useful feature for teams.


* Create New File
Currently the program writes the results to document index.html. The next time the program runs, the previous team's info is overwritten. If the name of index.html changed each time (ie manager-name.html or team-manager.html), the teams can be saved and become easily accessible. These could then easily be used on web pages or within departments.

* Convert to PDF
Along the same vein and perhaps making the team info more accessible, the program could output a pdf file. PDF files are more widely used and could be easily emailed, printed and shared.
