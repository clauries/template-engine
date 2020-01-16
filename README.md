# Team Template Engine
A node program providing supervisors with a way to keep accurate team profiles.

![Issues](https://img.shields.io/github/issues/clauries/template-engine) ![Forks](https://img.shields.io/github/forks/clauries/template-engine) ![Stars](https://img.shields.io/github/stars/clauries/template-engine) ![License](https://img.shields.io/github/license/clauries/template-engine) ![Twitter](https://img.shields.io/twitter/url?style=social)


## Install & Use
1. Fork and then clone the repo to your computer.
2. In your terminal, navigate to the repo and run "npm install".
3. Once the packages are installed, run the program in the terminal with "node app.js"
4. The program will prompt first for the team manager's info. After answering each question, hit enter to prompt the next question.
5. Next choose if you want to add an engineer or intern. You can add as many as you want in any order. 
6. Once your team is complete, chose the option "No other employees to add. Please create my team's list."
7. The program will create your team's file and it will be found in your output folder.


## Tech Utilized
* HTML
* CSS
* Javascript
* Bootstrap
* Font Awesome
* Node
* jQuery
* Node Packages
    * NPM Inquirer
    * fs
    * Util


## Sucesses
* Writing HTML
My original plan was to append the HTML pieces together. However I saw that this would require more code than I thought was necessary. I went through past lessons and watched various youtube videos to learn/refresh how to to interpolate in a template literal. I have been struggling with this concept for the past few weeks of bootcamp, so this was a big win for me. 

* Coding for Tests
We were given the test code and were told to code the Employee.js, Engineer.js, Intern.js, and Manager.js files to pass the tests. I was able to - relatively easily - code for the tests. This was my first time creating a project around test driven development.


## Obstacles
* Knowedge Gaps
There were some areas where I lacked understanding for this project. As stated above, I did not understand some ways of working with template literals. Another knowledge gap was around requiring and exporting files for use. Someone on our class instruction team helped me identify I was attempting to call functions on another page rather than the variable with the required file path. I was able to overcome those gaps, but it was time consuming. 

* Complexity of File System
This project is the result of an assignment. The instructions hinted at creating several html pages. Not wanting to do that I chose to make several template literals in separate files. I was jumping between more pages than I have ever had to work with. 


## Future Development
* Answer Validation
A useful feature would be answer validation - making sure info is not left blank or that strange characters do not accidentally make it into a name. 

* Choose Team Structure
This program is rigid in that there is only one employee structure with 3 different roles: Manager, engineer, interns. It would be a great feature for the app to launch with choices for what roles are on the team and in what order they should appear on the page. This feature was outside the scope of my original project and user story. However, I can see it being a useful feature for teams.


* Create New File
Currently the program writes the results to document index.html. The next time the program runs, the previous team's info is overwritten. If the name of index.html changed each time (ie manager-name.html or team-manager.html), the teams can be saved and become easily accessible. These could then easily be used on web pages or within departments.

* Convert to PDF
Along the same vein and perhaps making the team info more accessible, the program could output a pdf file. PDF files are more widely used and could be easily emailed, printed and shared.


## License
MIT License

Copyright (c) 2020 Laurie Schroeder

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.