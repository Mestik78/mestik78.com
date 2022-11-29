let storeName, storeFolder

function getCurrentStore(){
    storeName = getUpperFolder()
    if (!storeName || !checkExists("./data/"+toFirstUppercase(storeName))) {
        storeName =  "roblox"
    }
    storeFolder = "./data/"+toFirstUppercase(storeName)+"/"
}

function loadBackground(){
    document.getElementById("backgroundBluredImage").src = storeFolder + "Images/Background.png"
}
function loadCurrentStore(){
    loadBackground()
}

getCurrentStore()
loadCurrentStore()