var ProjectsJson
fetch("../publicDatabase/projects.json")
    .then(response => response.json())
    .then(json => {
        ProjectsJson = json
    })
    .then(window.onload = start)


var currentProject
    
var projectIndex = -1

var openingTime = 0


const Containers = document.getElementById("mainnav")


function start(){
    if (openingTime == 1){
    
        var params = {};
        location.search.slice(1).split("&").forEach(function(pair) {
            pair = pair.split("=");
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        });
        
        currentProject = params.project
        
        for(i in ProjectsJson){
            if (ProjectsJson[i].title == currentProject){
                projectIndex = i
            }
        }
    
        console.log(projectIndex)
        if (projectIndex == -1){
            //window.location.href = 'index.html';
        }
    
    
        setupPage()
    }
    
    openingTime++
}



function setupPage(){
    
    projectInfo = ProjectsJson[projectIndex]

    var projectTitleObj = document.getElementById("projectTitle")
    projectTitleObj.textContent = projectInfo.title
    projectTitleObj.className = "projectTitle"


    var projectGame = document.getElementById("game")
    projectGame.src = "./publicDatabase/games/" + projectInfo.title + "/index.html"
}