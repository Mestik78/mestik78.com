function loadBackground(item, itemData){
    const backgroundImage = document.getElementById("backgroundImage")
    if (backgroundImage) { backgroundImage.src = storeFolder + "Images/Items/" + item + "/" + itemData.image.mobile }
    const backgroundBluredImage = document.getElementById("backgroundBluredImage")
    backgroundBluredImage.src = storeFolder + "Images/Items/" + item + "/" + itemData.image.desktop
}

function loadPageTitle(itemData){
    document.title = itemData.name
}

function loadTitle(itemData){
    const title = document.getElementById("gameTitle")
    title.innerText = itemData.name
}

function loadDescription(itemData){
    const description = document.getElementById("description")
    description.innerText = itemData.description
}

function loadLinks(itemData){
    if (itemData.links.buyButton == "") {
        buyButton.className += " hide"
    } else {
        const buyButton = document.getElementById("buyButton")
        buyButton.onclick = function() {window.open(itemData.links.buyButton,'Payment','width=500,height=650')}
    }
    const robloxButton = document.getElementById("robloxButton")
    robloxButton.href = itemData.links.Roblox
    const robloxBigButton = document.getElementById("robloxBigButton")
    robloxBigButton.href = itemData.links.Roblox
}

function loadPrice(itemData){
    const price = document.getElementById("price")
    price.innerText = itemData.price + "€"
}

function loadGallery(item, itemData){
    const slideshowImages = document.getElementById("slideshowImages")
    const jumpButtons = document.getElementById("jumpButtons")

    var i = 1;
    for (let image of itemData.gallery){
        let newImage = document.createElement("img")
        newImage.src = storeFolder + "Images/Items/" + item + "/" + image
        newImage.className = "slideImage"
        slideshowImages.appendChild(newImage)
        
        let newJumpButton = document.createElement("span")
        newJumpButton.className = "imageJump button"
        let j = i;
        newJumpButton.onclick = function(){currentDiv(j)}
        jumpButtons.appendChild(newJumpButton)
        i++;
    }
    currentDiv(1, true)
}

function loadItemData(item, itemData) {
    loadBackground(item, itemData)
    loadPageTitle(itemData)
    loadTitle(itemData)
    loadDescription(itemData)
    loadLinks(itemData)
    loadPrice(itemData)
    loadGallery(item, itemData)
}

function start(){
    let currentItem = getParams().item
    let currentItemData = ItemsJson[currentItem]
    
    loadItemData(currentItem, currentItemData)
}

var ItemsJson
fetch(storeFolder + "items.json")
    .then(response => response.json())
    .then(json => {
        ItemsJson = json
    })
    .then(document.body.onloadstart = start)