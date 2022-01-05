function updatePageClasses() {
    const mainFrame = document.getElementById("mainFrame")

    if (isMobile) {
    } else {
        mainFrame.className += " upperRoundedCorners lowerRoundedCorners"
    }
}

updatePageClasses()