
const Projects = document.getElementById("ProjectsDesktop")

const gridspace1 = document.getElementById("grid-space1")
const gridspace2 = document.getElementById("grid-space2")




document.getElementById('listButton').onclick = setList;
setList()
function setList() {
    
    Projects.className = "ProjectsList"
    gridspace1.className = "grid-space hide"
    gridspace2.className = "grid-space hide"
    

    for(i in Projects.children){
        var object = Projects.children[i]
        if(object.className == "project-grid"){
            object.className = "project-list"
            
            object.children[0].className = "projectimage-bg"
            object.children[1].className = "projecttitlebox"
            object.children[1].children[0].className = "projecttitle"
            object.children[2].className = "projectdescbox"
        }
        if(object.className == "space hide"){
            object.className = "space"
        }
    }
    
}



document.getElementById('gridButton').onclick = setGrid;

function setGrid() {
    
    Projects.className = "ProjectsGrid"
    gridspace1.className = "grid-space"
    gridspace2.className = "grid-space"

    for(i in Projects.children){
        var object = Projects.children[i]
        if(object.className == "project-list"){
            object.className = "project-grid"

            
            object.children[0].className = "projectimage-bg-grid"
            object.children[1].className = "projecttitlebox-grid"
            object.children[1].children[0].className = "projecttitle-grid"
            object.children[2].className = "hide"
        }
        if(object.className == "space"){
            object.className = "space hide"
        }
    }
}