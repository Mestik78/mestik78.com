function loadName(itemData, itemFrame) {
    let storeGameTitle = itemFrame.getElementsByClassName("storeGameTitle")[0]
    storeGameTitle.innerText = itemData.name.toUpperCase()
}

function loadInfo(itemData, itemFrame) {
    let infoContainer = itemFrame.getElementsByClassName("infoContainer")[0]
    
    if (!itemData.info.gamepasses) {
        infoContainer.getElementsByClassName("gamepasses")[0].className += " hide"
    }
    if (itemData.info.type != "asset") {
        infoContainer.getElementsByClassName("asset")[0].className += " hide"
    }
    if (!itemData.info.original) {
        infoContainer.getElementsByClassName("original")[0].className += " hide"
    }

    infoContainer.className = "infoContainer"
}

function loadLink(item, itemFrame) {
    let a = itemFrame.getElementsByTagName("a")[0]
    a.href = "../" + storeName + "/item?item=" + item
}

function loadImage(itemData, itemFrame, item) {
    let imageContainer = itemFrame.getElementsByClassName("imageContainer")[0]
    let image = imageContainer.getElementsByTagName("img")[0]
    image.src = storeFolder + "Images/Items/" + item + "/" + itemData.image.main
}


async function loaditem(item, itemData, itemFrame) {
    loadName(itemData, itemFrame)
    loadInfo(itemData, itemFrame)
    loadLink(item, itemFrame)
    loadImage(itemData, itemFrame, item)
}


async function loadItemCard(item, itemData, itemFrame) {
    try {
        await loaditem(item, itemData, itemFrame)
    } catch (error) {
        console.log(error)
        itemFrame.innerHTML = '<img id="errorImage"></img>';
    }
}