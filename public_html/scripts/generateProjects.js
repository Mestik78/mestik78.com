var ProjectsJson
fetch("../publicDatabase/projects.json")
    .then(response => response.json())
    .then(json => {
        ProjectsJson = json
    })
    .then(document.body.onload = addElement)


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


function generateLink(object, Project){

    object.href = "/projectPage.html?project=" + Project.title //--
}


function generateProject(Project, webMode){
    

    var project = document.createElement('div');
    project.className = classes[webMode]["project"]

    Containers[webMode].insertAdjacentElement('beforeend',project);

    


    var projectImageBg = document.createElement("a");
    projectImageBg.className = classes[webMode]["projectimage-bg"]
    generateLink(projectImageBg, Project)

    project.insertAdjacentElement('beforeend',projectImageBg);


    var projectImage = document.createElement('img');
    projectImage.className = classes[webMode]["projectimage"]
    projectImage.src = Project.icon //--
    
    projectImageBg.insertAdjacentElement('beforeend',projectImage);



    
    var projectTitleBox = document.createElement('div');
    projectTitleBox.className = classes[webMode]["projecttitlebox"]
    
    project.insertAdjacentElement('beforeend',projectTitleBox);

    
    var projectTitle = document.createElement('a');
    projectTitle.className = classes[webMode]["projecttitle"]
    projectTitle.textContent = Project.title //--
    generateLink(projectTitle, Project)
    
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
    var spacingdesktop = document.createElement('div');
    spacingdesktop.style.height = "50px"

    Containers["desktop"].insertAdjacentElement('beforeend',spacingdesktop);
    
    var spacingmobile = document.createElement('div');
    spacingmobile.style.height = "50px"

    Containers["mobile"].insertAdjacentElement('beforeend',spacingmobile);
}


function addElement () {

    for(i in ProjectsJson){
        generateProject(ProjectsJson[i], "desktop")
        generateProject(ProjectsJson[i], "mobile")
        generateSpacing()
    }

}