function loadProject(project, frame) {
    let newProject = document.createElement("a")
    newProject.href = "/project?project=" + project.name
    newProject.className = "project button"
    frame.appendChild(newProject)
    
    let imageContainer = document.createElement("div")
    imageContainer.className = "imageContainer"
    newProject.appendChild(imageContainer)
    
    let image = document.createElement("img")
    image.src = project.image.main
    imageContainer.appendChild(image)
    
    let imageOverlay = document.createElement("div")
    imageOverlay.className = "imageOverlay"
    imageContainer.appendChild(imageOverlay)
    
    let storeGameTitle = document.createElement("div")
    storeGameTitle.className = "storeGameTitle"
    storeGameTitle.innerText = project.name
    newProject.appendChild(storeGameTitle)
    
    let extrasContainer = document.createElement("div")
    extrasContainer.className = "extrasContainer"
    newProject.appendChild(extrasContainer)
    
    if (project.gamepasses) {
        let gamepasses = document.createElement("div")
        gamepasses.className = "gamepasses"
        extrasContainer.appendChild(gamepasses)

        let gamepassesText = document.createElement("p")
        gamepassesText.id = "gp"
        gamepassesText.innerText = "GP"
        gamepasses.appendChild(gamepassesText)

        let gamepassesInfo = document.createElement("p")
        gamepassesInfo.id = "info"
        gamepassesInfo.className = "text"
        gamepassesInfo.innerText = "Includes game passes"
        gamepasses.appendChild(gamepassesInfo)
    }
}

function deleteProjects(projectsFrame) {
    projectsFrame.innerHTML = ""
}

async function loadStore() {
    if(typeof ProjectsJson == "undefined"){
        setTimeout(loadStore, 10);
        return
    }
    
    const projectsFrame = document.getElementById("projectsFrame")

    deleteProjects(projectsFrame)
    for ([key, project] of Object.entries(ProjectsJson)) {
        if (project.type == selectedTab) {
            loadProject(project, projectsFrame)
        }
    }
}


var ProjectsJson
fetch("./data/robloxProjects.json")
    .then(response => response.json())
    .then(json => {
        ProjectsJson = json
    })