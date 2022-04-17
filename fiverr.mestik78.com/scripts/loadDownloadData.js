function loadBackground(projectData){
    const backgroundBluredImage = document.getElementById("backgroundBluredImage")
    backgroundBluredImage.src = projectData.image.desktop
}

function loadTitle(projectData){
    const title = document.getElementById("gameTitle")
    title.innerText = projectData.name
}

function getFileFromName(name){
    let file = name.replaceAll(" ", "-")
    return file
}

function doesFileExist(urlToFile) {
    var http = new XMLHttpRequest();
    http.open('HEAD', urlToFile, false);
    http.send();
    return http.status!=404;
}

async function loadDownloadButton(projectData, id){
    const downloadButton = document.getElementById("downloadButton")
    let fileName = getFileFromName(projectData.name) + "-" + id + ".rbxl"
    let fileExists = doesFileExist("./data/files/" + fileName)
    if (fileExists) {
        downloadButton.download = projectData.name + ".rbxl"
        downloadButton.href = "./data/files/" + fileName
    } else {
        downloadButton.setAttribute("disabled", "")
    }
}

function loadDownloadData(projectData, id) {
    loadBackground(projectData)
    loadTitle(projectData)
    loadDownloadButton(projectData, id)
}


function getParams() {
    var params = {};
    location.search.slice(1).split("&").forEach(function(pair) {
        pair = pair.split("=");
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    });
    return params
}

function start(){
    let params = getParams()
    let currentProject = params.project
    let currentProjectData = ProjectsJson[currentProject]
    let id = params.id

    loadDownloadData(currentProjectData, id)
}

var ProjectsJson
fetch("./data/robloxProjects.json")
    .then(response => response.json())
    .then(json => {
        ProjectsJson = json
    })
    .then(document.body.onloadstart = start)