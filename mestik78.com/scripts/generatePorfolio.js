function generatePorfolio(){
    var EntriesJson
    fetch("../data/porfolioEntries.json")
        .then(response => response.json())
        .then(json => {
            EntriesJson = json
        })
        .then(document.body.onloadstart = start)
    
    
    const EntriesContainer = document.getElementById("porfolio-entries-container")
    
    function getLink(Project){
        let link = "/project?project=" + Project.title
        return link
    }
    
    function generatEntry(Project){
        
        var entry = document.createElement('a');
        entry.className = "porfolio-entry rounded-effect-and-children card"
        entry.href = getLink(Project)
        EntriesContainer.appendChild(entry);
    
        var projectImage = document.createElement('img');
        projectImage.setAttribute("src", Project.image)
        entry.appendChild(projectImage);
    
    }
    
    function start() {
        for(i in EntriesJson){
            generatEntry(EntriesJson[i])
        }
    }
}


generatePorfolio()