let storeName, storeFolder, storeInfo

function getCurrentStore(){
    storeName = getUpperFolder()
    if (!storeName || !checkExists("./data/"+toFirstUppercase(storeName))) {
        storeName =  "roblox"
    }
    storeFolder = "./data/"+toFirstUppercase(storeName)+"/"
    
    fetch(storeFolder + "storeInfo.json")
        .then(response => response.json())
        .then(json => {
            storeInfo = json
        })
}

function loadBackground(){
    document.getElementById("backgroundBluredImage").src = storeFolder + "Images/Background.png"
}
function loadCurrentStore(){
    loadBackground()
}

getCurrentStore()
loadCurrentStore()