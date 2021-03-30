var webMode

var ProjectsJson
fetch("../publicDatabase/projects.json")
    .then(response => response.json())
    .then(json => {
        ProjectsJson = json
    })

document.body.onload = addElement;

const Containers = {
    "desktop": document.getElementById("ProjectsDesktop"),
    "mobile": document.getElementById("ProjectsMobile")
}

const classes = {
    "desktop": {
        "project": "project",
        "projectimage-bg": "projectimage-bg",
        "projectimage": "projectimage",
        "projecttitlebox": "projecttitlebox",
        "projecttitle": "projecttitle",
        "projectdescbox": "projectdescbox",
        "projectdesc": "projectdesc"
    },
    "mobile": {
        "project": "project-mobile",
        "projectimage-bg": "projectimage-bg-mobile",
        "projectimage": "projectimage-mobile",
        "projecttitlebox": "projecttitlebox-mobile",
        "projecttitle": "projecttitle-mobile",
        "projectdescbox": "projectdescbox-mobile",
        "projectdesc": "projectdesc-mobile"
    }
}


function generateProject(Project){
    
    var project = document.createElement('div');
    project.className = classes[webMode]["project"]

    Containers[webMode].insertAdjacentElement('beforeend',project);

    


    var projectImageBg = document.createElement("div");
    projectImageBg.className = classes[webMode]["projectimage-bg"]

    project.insertAdjacentElement('beforeend',projectImageBg);


    var projectImage = document.createElement('img');
    projectImage.className = classes[webMode]["projectimage"]
    projectImage.src = Project.image //--
    
    projectImageBg.insertAdjacentElement('beforeend',projectImage);



    
    var projectTitleBox = document.createElement('div');
    projectTitleBox.className = classes[webMode]["projecttitlebox"]
    
    project.insertAdjacentElement('beforeend',projectTitleBox);

    
    var projectTitle = document.createElement('h3');
    projectTitle.className = classes[webMode]["projecttitle"]
    projectTitle.textContent = Project.title //--
    
    projectTitleBox.insertAdjacentElement('beforeend',projectTitle);



    
    var projectDescBox = document.createElement('div');
    projectDescBox.className = classes[webMode]["projectdescbox"]
    
    project.insertAdjacentElement('beforeend',projectDescBox);

    
    var projectDes = document.createElement('h6');
    projectDes.className = classes[webMode]["projectdesc"]
    projectDes.textContent = Project.briefDescription //--
    
    projectDescBox.insertAdjacentElement('beforeend',projectDes);

}

function generateSpacing(){
    var spacing = document.createElement('div');
    spacing.style.height = "50px"

    Containers[webMode].insertAdjacentElement('beforeend',spacing);
}


function addElement () {

    if (window.innerWidth <= 1080){
        webMode = "mobile"
    } else {
        webMode = "desktop"
    }

    for(i in ProjectsJson){
        generateProject(ProjectsJson[i])
        generateSpacing()
    }

}