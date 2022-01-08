var ProjectsJson
var WebsImages

fetch("../data/projects.json")
    .then(response => response.json())
    .then(json => {
        ProjectsJson = json
    })
    .then(document.body.onloadstart = start)


var currentProject
    
var projectIndex = -1

const Containers = document.getElementById("mainnav")

function start(){
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
    setupPage()
}


function setupPage(){
    projectInfo = ProjectsJson[projectIndex]

    var projectTitle = document.getElementById("project-title")
    projectTitle.innerText = projectInfo.title

    var projectIcon = document.getElementById("project-icon")
    projectIcon.src = projectInfo.icon

    var projectDescription = document.getElementById("project-description")
    projectDescription.textContent = projectInfo.description

    loadGallery(projectInfo)

    fetch("../data/websImages.json")
        .then(response => response.json())
        .then(json => {
            WebsImages = json
        }).then(
            function() {
                
                for(i in projectInfo.links){
                    generateLinkImage(i, webMode)
                }
            }
        )
}

function generateLinkImage(i){

    container = document.getElementById("linksImages" + [webMode])


    var linkImageContainer = document.createElement("a");
    linkImageContainer.className = classes[webMode]["linkimagecontainer"]
    linkImageContainer.href = projectInfo.links[i]
    linkImageContainer.target = "_blank"

    container.insertAdjacentElement('beforeend',linkImageContainer);


    
    var linkImage = document.createElement("img");
    linkImage.className = classes[webMode]["linkimage"]
    linkImage.src = WebsImages[i]


    linkImageContainer.insertAdjacentElement('beforeend',linkImage);
}

function loadGallery(projectInfo){
    const slideshowImages = document.getElementById("slideshowImages")
    const jumpButtons = document.getElementById("jumpButtons")

    var i = 1;
    for (let image of projectInfo.images){
        let newImage = document.createElement("img")
        newImage.src = image
        newImage.className = "slideImage rounded-corners"
        slideshowImages.appendChild(newImage)
        
        let newJumpButton = document.createElement("span")
        newJumpButton.className = "imageJump button-action"
        let j = i;
        newJumpButton.onclick = function(){currentDiv(j)}
        jumpButtons.appendChild(newJumpButton)
        i++;
    }
    currentDiv(1)
}