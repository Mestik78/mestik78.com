//ProjectsJson = JSON.parse(projects)

function loadBackground(projectData){
    const backgroundImage = document.getElementById("backgroundImage")
    if (backgroundImage) { backgroundImage.src = projectData.image.mobile }
    const backgroundBluredImage = document.getElementById("backgroundBluredImage")
    backgroundBluredImage.src = projectData.image.desktop
}

function loadTitle(projectData){
    const title = document.getElementById("gameTitle")
    title.innerText = projectData.name
}

function loadDescription(projectData){
    const description = document.getElementById("description")
    description.innerText = projectData.description
}

function loadLinks(projectData){
    const buyButton = document.getElementById("buyButton")
    buyButton.href = projectData.links.buyButton
    const robloxButton = document.getElementById("robloxButton")
    robloxButton.href = projectData.links.Roblox
    const robloxBigButton = document.getElementById("robloxBigButton")
    robloxBigButton.href = projectData.links.Roblox
}

function loadPrice(projectData){
    const price = document.getElementById("price")
    price.innerText = projectData.price + "€"
}

function loadAsset(asset, assetsFrame){
    let assetData = ProjectsJson[asset]

    let newAsset = document.createElement("a")
    newAsset.href = "/project?project=" + assetData.name
    newAsset.className = "button"
    assetsFrame.appendChild(newAsset)

    let image = document.createElement("img")
    image.src = assetData.image.asset
    image.className = "assetImage"
    newAsset.appendChild(image)
    
    let title = document.createElement("div")
    title.innerText = assetData.name
    title.className = "assetTitle"
    newAsset.appendChild(title)

}

function loadAssetsIncluded(projectData){
    const assetsFrame = document.getElementById("assetsFrame")
    for (let asset of projectData.assets) {
        loadAsset(asset, assetsFrame)
    }

    if (projectData.assets.length == 0){
        const assetsIncludedTitle = document.getElementById("assetsIncludedTitle")
        const assetsViewer = document.getElementById("assetsViewer")
        assetsIncludedTitle.innerText = ""
        assetsViewer.remove()
    }
}

function loadGallery(projectData){
    const slideshowImages = document.getElementById("slideshowImages")
    const jumpButtons = document.getElementById("jumpButtons")

    var i = 1;
    for (let image of projectData.gallery){
        let newImage = document.createElement("img")
        newImage.src = image
        newImage.className = "slideImage"
        slideshowImages.appendChild(newImage)
        
        let newJumpButton = document.createElement("span")
        newJumpButton.className = "imageJump button"
        let j = i;
        newJumpButton.onclick = function(){currentDiv(j)}
        jumpButtons.appendChild(newJumpButton)
        i++;
    }
    currentDiv(1)
}

function loadProjectData(projectData) {
    loadBackground(projectData)
    loadTitle(projectData)
    loadDescription(projectData)
    loadLinks(projectData)
    loadPrice(projectData)
    loadAssetsIncluded(projectData)
    loadGallery(projectData)
}


function getParams() {
    var params = {};
    location.search.slice(1).split("&").forEach(function(pair) {
        pair = pair.split("=");
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    });
    return params
}

function start(){
    let currentProject = getParams().project
    let currentProjectData = ProjectsJson[currentProject]
    
    loadProjectData(currentProjectData)
}

var ProjectsJson
fetch("./data/robloxProjects.json")
    .then(response => response.json())
    .then(json => {
        ProjectsJson = json
    })
    .then(document.body.onloadstart = start)