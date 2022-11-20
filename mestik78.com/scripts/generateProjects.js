function generateProjects(){
    var ProjectsJson
    fetch("../data/projects.json")
        .then(response => response.json())
        .then(json => {
            ProjectsJson = json
        })
        .then(document.body.onloadstart = start)
    
    
    const Container =  document.getElementById("projects-entries-container")
        
    function getLink(Project){
        let link = "/project?project=" + Project.title
        return link
    }
    
    function generateProject(Project){
        
        var project = document.createElement('a');
        project.className = "project-entry rounded-effect-and-children"
        project.href = getLink(Project)
        Container.appendChild(project);
    
        var frame = document.createElement('div');
        frame.href = getLink(Project)
        project.appendChild(frame);
    
        var image = document.createElement('img');
        image.className = "projectimage asyncImage rounded-effect-and-children card"
        image.src = Project.icon
        frame.appendChild(image);
    
        var imageOverlay = document.createElement('div');
        imageOverlay.className = "imageOverlay rounded-effect-and-children"
        frame.appendChild(imageOverlay);
    
        var title = document.createElement('p');
        title.className = "text-project-title"
        title.textContent = Project.title
        project.appendChild(title);
    
    }
    
    function start() {
        for(i in ProjectsJson){
            generateProject(ProjectsJson[i])
        }
    }
}

generateProjects()