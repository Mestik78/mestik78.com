var selectedTab

const tabs = document.getElementsByClassName("tab")
tabs[0].onmousedown = function() { tabClicked("game") }
tabs[1].onmousedown = function() { tabClicked("asset") }

tabClicked("game")

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

function tabClicked(tab) {
    if (tab == "game"){
        setActive(tabs[0])
        setNotActive(tabs[1])
    } else {
        setNotActive(tabs[0])
        setActive(tabs[1])
    }
    prevTab = selectedTab
    selectedTab = tab
    if (selectedTab != prevTab) { loadStore() }
}