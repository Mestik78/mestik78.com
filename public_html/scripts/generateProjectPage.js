var ProjectsJson
var WebsImages

fetch("../publicDatabase/projects.json")
    .then(response => response.json())
    .then(json => {
        ProjectsJson = json
    })
    .then(document.body.onloadstart = start)


var currentProject
    
var projectIndex = -1



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
        "projectimage-bg": "projectimage-bg",
        "linkimage": "linkimage",
        "linkimagecontainer": "linkimagecontainer"
    },
    "Mobile": {
        "projectTitle": "projectTitle-mobile",
        "projecticon-bg": "projecticon-bg-mobile",
        "projecticon": "projecticon-mobile",
        "projectimage": "projectimage-mobile",
        "projectimage-bg": "projectimage-bg-mobile",
        "linkimage": "linkimage-mobile",
        "linkimagecontainer": "linkimagecontainer-mobile"
    }
}


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

    if (projectIndex == -1){
        //window.location.href = 'index.html';
    }


    setupPage("Desktop")
    setupPage("Mobile")
}


function generateSpacing(Container){
    var spacingdesktop = document.createElement('div');
    spacingdesktop.style.height = "50px"

    Container.insertAdjacentElement('beforeend',spacingdesktop);
}


function setupPage(webMode){

    projectInfo = ProjectsJson[projectIndex]


    var projectTitleObj = document.getElementById("projectTitle" + [webMode])
    projectTitleObj.textContent = projectInfo.title
    projectTitleObj.className = classes[webMode].projectTitle



    var projectIcon = document.getElementById("projecticon"+ [webMode])
    projectIcon.src = projectInfo.icon //--


    
    var briefDescription = document.getElementById("projectbriefdesc"+ [webMode])
    briefDescription.textContent = projectInfo.briefDescription //--
    
    var Description = document.getElementById("projectdesc"+ [webMode])
    Description.textContent = projectInfo.description //--


    if(webMode == "Desktop"){

        var projectPlay = document.getElementById("projectplay")

        if (projectInfo.game){
            projectPlay.href = "/gamePage.html?game=" + projectInfo.title //--
        }else{
            projectPlay.className += " hide"
        }


        
        var itchicoWidget = document.getElementById("itchioWidget")
        if(projectInfo.widgets.hasOwnProperty("itch.io")){
            itchicoWidget.src = projectInfo.widgets["itch.io"].src
            itchicoWidget.href = projectInfo.widgets["itch.io"].href
        }else{
            itchicoWidget.className = "hide"
        }
    }





    images = projectInfo.images
    
    for(i in images){
        generateProjectImage(images[i], webMode)
    }


    
    fetch("../publicDatabase/websImages.json")
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

function generateLinkImage(i, webMode){

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