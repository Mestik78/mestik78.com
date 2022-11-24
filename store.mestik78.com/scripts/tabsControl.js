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

function showProjects(type) {
    let SelectedProjects
    if (type == "games") { SelectedProjects = Games }
    if (type == "assets") { SelectedProjects = Assets }

    for (let project of SelectedProjects) {
        if (project.className.search(" hiddenProject") > -1) {
            project.className = project.className.replace(" hiddenProject", "")
        }
    }
}

function hideProjects(type) {
    let SelectedProjects
    if (type == "games") { SelectedProjects = Games }
    if (type == "assets") { SelectedProjects = Assets }

    for (let project of SelectedProjects) {
        if (project.className.search(" hiddenProject") < 0) {
            project.className += " hiddenProject"
        }
    }
}

function tabClicked(tab) {
    if (tab == "all"){
        showProjects("games")
        showProjects("assets")
    } else {
        if (tab == "games") {
            hideProjects("assets")
            showProjects("games")
        }
        if (tab == "assets") {
            hideProjects("games")
            showProjects("assets")
        }
    }
    prevTab = selectedTab
    selectedTab = tab
}