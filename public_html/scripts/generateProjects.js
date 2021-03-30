console.log("Hello World!")


var Projects = document.getElementById("Projects");
document.body.onload = addElement;

function generateProject(){
    
    var project = document.createElement('div');
    project.className = "project"

    Projects.insertAdjacentElement('beforeend',project);

    

    var projectImageBg = document.createElement("div");
    projectImageBg.className = "projectimage-bg"

    project.insertAdjacentElement('beforeend',projectImageBg);


    var projectImage = document.createElement('img');
    projectImage.className = "projectimage"
    projectImage.src = "https://img.itch.zone/aW1nLzIwNDI4MDYucG5n/original/nM2ihk.png" //--
    
    projectImageBg.insertAdjacentElement('beforeend',projectImage);

}

function generateSpacing(){
    var spacing = document.createElement('div');
    spacing.style.height = "50px"

    Projects.insertAdjacentElement('beforeend',spacing);
}


function addElement () {

    for(i = 0; i < 3; i++){
        generateProject()
        generateSpacing()
    }

}