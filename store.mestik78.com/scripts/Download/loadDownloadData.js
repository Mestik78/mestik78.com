function loadBackground(itemData){
    const backgroundBluredImage = document.getElementById("backgroundBluredImage")
    backgroundBluredImage.src = itemData.image.desktop
}

function loadTitle(itemData){
    const title = document.getElementById("gameTitle")
    title.innerText = itemData.name
}

function getFileFromName(name){
    let file = name.replaceAll(" ", "-")
    return file
}

function doesFileExist(urlToFile) {
    var http = new XMLHttpRequest();
    http.open('HEAD', urlToFile, false);
    http.send();
    return http.status!=404;
}

async function loadDownloadButton(currentItem, itemData, id){
    const downloadButton = document.getElementById("downloadButton")
    let fileName = getFileFromName(currentItem) + "-" + id + ".rbxl"
    let fileExists = doesFileExist("./data/files/" + fileName)
    if (fileExists) {
        downloadButton.download = itemData.name + ".rbxl"
        downloadButton.href = "./data/files/" + fileName
    } else {
        downloadButton.setAttribute("disabled", "")
    }
}

function loadDownloadData(currentItem, itemData, id) {
    loadBackground(itemData)
    loadTitle(itemData)
    loadDownloadButton(currentItem, itemData, id)
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
    let params = getParams()
    let currentItem = params.item
    let currentItemData = ItemsJson[currentItem]
    let id = params.id

    loadDownloadData(currentItem, currentItemData, id)
}

var ItemsJson
fetch("./data/robloxItems.json")
    .then(response => response.json())
    .then(json => {
        ItemsJson = json
    })
    .then(document.body.onloadstart = start)