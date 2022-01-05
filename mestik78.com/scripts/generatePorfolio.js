function generatePorfolio(){
    var EntriesJson
    fetch("../publicDatabase/porfolioEntries.json")
        .then(response => response.json())
        .then(json => {
            EntriesJson = json
        })
        .then(document.body.onloadstart = addElement)
    
    
    const EntriesContainers = {
        "desktop": document.getElementById("PorfolioEntriesDesktop"),
        //"mobile": document.getElementById("PorfolioEntriesMobile")
    }
    
    const EntriesClasses = {
        "desktop": {
            "entry": "entry",
            "entryimage": "entryimage"
        },
        "mobile": {
            "entry": "entry-mobile",
            "entryimage": "entryimage-mobile"
        }
    }
    
    
    function generateLink(object, Project){
    
        object.href = "/projectPage?project=" + Project.title //--
    }
    
    
    function generatEntry(Project, webMode){
        
        var entry = document.createElement('a');
        entry.className = EntriesClasses[webMode]["entry"]
        entry.href = "/projectPage?project=" + Project.title
    
        EntriesContainers[webMode].insertAdjacentElement('beforeend',entry);
    
        var projectImage = document.createElement('img');
        projectImage.className = EntriesClasses[webMode]["entryimage"] + " lazy"
        projectImage.setAttribute("data-src", Project.image) //--
        projectImage.setAttribute("src", Project.image) //--
        
        entry.insertAdjacentElement('beforeend',projectImage);
    
    }
    
    function generateSpacing(){
        /*var spacingdesktop = document.createElement('div');
        spacingdesktop.style.height = "50px"
        spacingdesktop.className = "space"
    
        Containers["desktop"].insertAdjacentElement('beforeend',spacingdesktop);*/
        
        var spacingmobile = document.createElement('div');
        spacingmobile.style.height = "50px"
        spacingmobile.className = "space"
    
        EntriesContainers["mobile"].insertAdjacentElement('beforeend',spacingmobile);
    }
    
    
    function addElement () {
        console.log("I should be first")
    
        for(i in EntriesJson){
            generatEntry(EntriesJson[i], "desktop")
            //generatEntry(EntriesJson[i], "mobile")
            //generateSpacing()
        }
    }
}


generatePorfolio()