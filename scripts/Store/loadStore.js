let loadStore = {}

let storeName, storeFolder, storeInfo

loadStore.getCurrentStore = function() {
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
        .then(loadStore.loadCurrentStore)
}

loadStore.loadBackground = function(){
    document.getElementById("backgroundBluredImage").src = storeFolder + "Images/Background.png"
}
loadStore.loadStyle = function() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = "../../Styles/Values/" + storeInfo.style + ".css"
    document.getElementsByTagName('HEAD')[0].appendChild(link);
}

loadStore.loadCurrentStore = function() {
    loadStore.loadBackground()
    loadStore.loadStyle()
}

loadStore.getCurrentStore()