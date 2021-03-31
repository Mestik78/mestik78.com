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


const Containers = {
    "Desktop": document.getElementById("mainnav"),
    "Mobile": document.getElementById("mainnav-mobile")
}

const classes = {
    "Desktop": {
        "projectTitle": "projectTitle",
        "projecticon-bg": "projecticon-bg",
        "projecticon": "projecticon",
        "projectimage": "projectimage",
        "projectimage-bg": "projectimage-bg"
    },
    "Mobile": {
        "projectTitle": "projectTitle-mobile",
        "projecticon-bg": "projecticon-bg-mobile",
        "projecticon": "projecticon-mobile",
        "projectimage": "projectimage-mobile",
        "projectimage-bg": "projectimage-bg-mobile"
    }
}


function start(){
    if (openingTime == 1){


        console.log("hey")
    
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
    
    
        setupPage("Desktop")
        //setupPage("Mobile")
    }
    
    openingTime++
}


function generateSpacing(Container){
    var spacingdesktop = document.createElement('div');
    spacingdesktop.style.height = "50px"

    Container.insertAdjacentElement('beforeend',spacingdesktop);
}


function setupPage(webMode){

    projectInfo = ProjectsJson[projectIndex]
    console.log(projectInfo)


    var projectTitleObj = document.getElementById("projectTitle" + [webMode])
    projectTitleObj.textContent = projectInfo.title
    projectTitleObj.className = classes[webMode].projectTitle



    var projectIcon = document.getElementById("projecticon"+ [webMode])
    projectIcon.src = projectInfo.icon //--


    

    images = projectInfo.images
    console.log(images)
    
    for(i in images){
        generateProjectImage(images[i], webMode)
    }
}

function generateProjectImage(image, webMode){

    container = document.getElementById("projectimages"+ [webMode])

    var projectImageBg = document.createElement("div");
    projectImageBg.className = classes[webMode]["projectimage-bg"]

    container.insertAdjacentElement('beforeend',projectImageBg);


    var projectImage = document.createElement('img');
    projectImage.className = classes[webMode]["projectimage"]
    projectImage.src = image //--
    
    projectImageBg.insertAdjacentElement('beforeend',projectImage);

    
    generateSpacing(container)

}