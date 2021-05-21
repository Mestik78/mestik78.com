function generateProjects(){
    var ProjectsJson
    fetch("../publicDatabase/projects.json")
        .then(response => response.json())
        .then(json => {
            ProjectsJson = json
        })
        .then(document.body.onloadstart = addElement)
    
    
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
            "projecttitle": "projecttitle"
        },
        "mobile": {
            "project": "project-mobile",
            "projectimage-bg": "projectimage-bg-mobile",
            "projectimage": "projectimage-mobile",
            "projecttitlebox": "projecttitlebox-mobile",
            "projecttitle": "projecttitle-mobile"
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
        projectImage.className = classes[webMode]["projectimage"] + " asyncImage"
        projectImage.setAttribute("data-src", Project.icon) //--
        projectImage.src = Project.iconLowRes //--
        
        projectImageBg.insertAdjacentElement('beforeend',projectImage);
    
    
    
        
        var projectTitleBox = document.createElement('div');
        projectTitleBox.className = classes[webMode]["projecttitlebox"]
        
        project.insertAdjacentElement('beforeend',projectTitleBox);
    
        
        var projectTitle = document.createElement('a');
        projectTitle.className = classes[webMode]["projecttitle"]
        projectTitle.textContent = Project.title //--
        generateLink(projectTitle, Project)
        
        projectTitleBox.insertAdjacentElement('beforeend',projectTitle);
    
    
    
    
    }
    
    function generateSpacing(){
        /*var spacingdesktop = document.createElement('div');
        spacingdesktop.style.height = "50px"
        spacingdesktop.className = "space"
    
        Containers["desktop"].insertAdjacentElement('beforeend',spacingdesktop);*/
        
        var spacingmobile = document.createElement('div');
        spacingmobile.style.height = "50px"
        spacingmobile.className = "space"
    
        Containers["mobile"].insertAdjacentElement('beforeend',spacingmobile);
    }
    
    
    function addElement () {
    
        for(i in ProjectsJson){
            generateProject(ProjectsJson[i], "desktop")
            generateProject(ProjectsJson[i], "mobile")
            generateSpacing()
        }
    }
}

generateProjects()