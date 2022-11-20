let Games = []
let Assets = []



function readStringFromFileAtPath(pathOfFileToReadFrom)
{
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

function loadProject(project, projectData, frame) {
    let newProject = document.createElement("div")
    newProject.innerHTML = readStringFromFileAtPath("../projectCard?project=" + project.name);
    newProject.className = "projectFrame"
    frame.appendChild(newProject)

    loadProjectCard(project, projectData, newProject)

    return newProject
}

function deleteProjects(projectsFrame) {
    projectsFrame.innerHTML = ""
}

async function loadStore() {
    if(typeof ProjectsJson == "undefined"){
        setTimeout(loadStore, 10);
        return
    }
    
    const gamesFrame = document.getElementById("gamesFrame")
    const assetsFrame = document.getElementById("assetsFrame")

    deleteProjects(gamesFrame)
    deleteProjects(assetsFrame)
    for ([project, projectData] of Object.entries(ProjectsJson)) {
        if (projectData.info.type != "hidden") {
            let newProject = loadProject(project, projectData, gamesFrame)
            if (projectData.info.type == "game") {
                Games.push(newProject)
            }
            if (projectData.info.type == "asset") {
                Assets.push(newProject)
            }
        }
    }
}
loadStore()


var ProjectsJson
fetch("./data/robloxProjects.json")
    .then(response => response.json())
    .then(json => {
        ProjectsJson = json
    })