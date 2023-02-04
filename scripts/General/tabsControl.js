var selectedTab

const tabButtons = document.getElementsByClassName("tab")
tabButtons[0].onmousedown = function() { tabClicked("all") }
tabButtons[1].onmousedown = function() { tabClicked("games") }
tabButtons[2].onmousedown = function() { tabClicked("assets") }

tabClicked("all")

function isTabActive(tab) {
    return tab.className.includes(" activeTab")
}

function setActive(tab) {
    if (!isTabActive(tab)) {
        tab.className += " activeTab"
    }
}
function setNotActive(tab) {
    tab.className = tab.className.replace(" activeTab", "")
}

function showItems(type) {
    let SelectedItems
    if (type == "games") { SelectedItems = Games }
    if (type == "assets") { SelectedItems = Assets }

    for (let item of SelectedItems) {
        if (item.className.search(" hiddenItem") > -1) {
            item.className = item.className.replace(" hiddenItem", "")
        }
    }
}

function hideItems(type) {
    let SelectedItems
    if (type == "games") { SelectedItems = Games }
    if (type == "assets") { SelectedItems = Assets }

    for (let item of SelectedItems) {
        if (item.className.search(" hiddenItem") < 0) {
            item.className += " hiddenItem"
        }
    }
}

function tabClicked(tab) {
    if (tab == "all"){
        showItems("games")
        showItems("assets")
    } else {
        if (tab == "games") {
            hideItems("assets")
            showItems("games")
        }
        if (tab == "assets") {
            hideItems("games")
            showItems("assets")
        }
    }
    prevTab = selectedTab
    selectedTab = tab
}