function updatePageClasses() {
    const backgroundImage = document.getElementById("backgroundImage")
    const assetsFrame = document.getElementById("assetsFrame")
    const assetsViewer = document.getElementById("assetsViewer")
    const mainFrame = document.getElementById("mainFrame")

    
    if (isMobile) {
        assetsFrame.className = "assetsFrameMobile";
        assetsViewer.className = "assetsViewerMobile";
    } else {
        assetsFrame.className = "assetsFrameDesktop";
        assetsViewer.className = "assetsViewerDesktop";
        mainFrame.className += " lowerRoundedCorners"
        backgroundImage.remove()
    }
}

updatePageClasses()