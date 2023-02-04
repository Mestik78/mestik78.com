let Games = []
let Assets = []


function loadItem(item, itemData, frame) {
    let newItem = document.createElement("div")
    newItem.innerHTML = readStringFromFileAtPath("../itemCard");
    newItem.className = "itemFrame"
    frame.appendChild(newItem)

    loadItemCard(item, itemData, newItem)

    return newItem
}

function deleteItems(itemsFrame) {
    itemsFrame.innerHTML = ""
}

async function loadItems() {
    if(typeof ItemsJson == "undefined"){
        setTimeout(loadItems, 10);
        return
    }
    
    const itemsFrame = document.getElementById("itemsFrame")

    deleteItems(itemsFrame)
    for ([item, itemData] of Object.entries(ItemsJson)) {
        if (itemData.info.type != "hidden") {
            let newItem = loadItem(item, itemData, itemsFrame)
            if (itemData.info.type == "game") {
                Games.push(newItem)
            }
            if (itemData.info.type == "asset") {
                Assets.push(newItem)
            }
        }
    }
}
loadItems()


var ItemsJson
fetch(storeFolder + "items.json")
    .then(response => response.json())
    .then(json => {
        ItemsJson = json
    })