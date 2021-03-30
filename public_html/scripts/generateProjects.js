
var ProjectsJson
fetch("../publicDatabase/projects.json")
    .then(response => response.json())
    .then(json => {
        ProjectsJson = json
    })

var Projects = document.getElementById("Projects");
document.body.onload = addElement;

function generateProject(Project){
    
    var project = document.createElement('div');
    project.className = "project"

    Projects.insertAdjacentElement('beforeend',project);

    


    var projectImageBg = document.createElement("div");
    projectImageBg.className = "projectimage-bg"

    project.insertAdjacentElement('beforeend',projectImageBg);


    var projectImage = document.createElement('img');
    projectImage.className = "projectimage"
    projectImage.src = Project.image //--
    
    projectImageBg.insertAdjacentElement('beforeend',projectImage);



    
    var projectTitleBox = document.createElement('div');
    projectTitleBox.className = "projecttitlebox"
    
    project.insertAdjacentElement('beforeend',projectTitleBox);

    
    var projectTitle = document.createElement('h3');
    projectTitle.className = "projecttitle"
    projectTitle.textContent = Project.title //--
    
    projectTitleBox.insertAdjacentElement('beforeend',projectTitle);



    
    var projectDescBox = document.createElement('div');
    projectDescBox.className = "projectdescbox"
    
    project.insertAdjacentElement('beforeend',projectDescBox);

    
    var projectDes = document.createElement('h6');
    projectDes.className = "projectdesc"
    projectDes.textContent = Project.briefDescription //--
    
    projectDescBox.insertAdjacentElement('beforeend',projectDes);

}

function generateSpacing(){
    var spacing = document.createElement('div');
    spacing.style.height = "50px"

    Projects.insertAdjacentElement('beforeend',spacing);
}


function addElement () {

    for(i in ProjectsJson){
        generateProject(ProjectsJson[i])
        generateSpacing()
    }

}