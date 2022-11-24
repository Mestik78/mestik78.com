function loadName(projectData, projectFrame) {
    let storeGameTitle = projectFrame.getElementsByClassName("storeGameTitle")[0]
    storeGameTitle.innerText = projectData.name.toUpperCase()
}

function loadInfo(projectData, projectFrame) {
    let infoContainer = projectFrame.getElementsByClassName("infoContainer")[0]
    
    if (!projectData.info.gamepasses) {
        infoContainer.getElementsByClassName("gamepasses")[0].className += " hide"
    }
    if (projectData.info.type != "asset") {
        infoContainer.getElementsByClassName("asset")[0].className += " hide"
    }
    if (!projectData.info.original) {
        infoContainer.getElementsByClassName("original")[0].className += " hide"
    }

    infoContainer.className = "infoContainer"
}

function loadLink(project, projectFrame) {
    let a = projectFrame.getElementsByTagName("a")[0]
    a.href = "../project?project=" + project
}

function loadImage(projectData, projectFrame) {
    let imageContainer = projectFrame.getElementsByClassName("imageContainer")[0]
    let image = imageContainer.getElementsByTagName("img")[0]
    image.src = projectData.image.main
}


async function loadproject(project, projectData, projectFrame) {
    loadName(projectData, projectFrame)
    loadInfo(projectData, projectFrame)
    loadLink(project, projectFrame)
    loadImage(projectData, projectFrame)
}


async function loadProjectCard(project, projectData, projectFrame) {
    try {
        await loadproject(project, projectData, projectFrame)
    } catch {
        projectFrame.innerHTML = '<img id="errorImage"></img>';
    }
}