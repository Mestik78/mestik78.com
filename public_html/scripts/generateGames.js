function generateGames(){
    var GamesJson
    fetch("../publicDatabase/games.json")
        .then(response => response.json())
        .then(json => {
            GamesJson = json
        })
        .then(document.body.onloadstart = addElement)
    
    
    const GameContainers = {
        "desktop": document.getElementById("GamesDesktop")
    }
    
    const GameClasses = {
        "desktop": {
            "game": "project",
            "gameimage-bg": "projectimage-bg",
            "gameimage": "projectimage",
            "gametitlebox": "projecttitlebox",
            "gametitle": "projecttitle"
        }
    }
    
    
    function generateLink(object, Game){
    
        object.href = "/gamePage.html?game=" + Game.title //--
    }
    
    
    function generateGame(Game, webMode){
        
    
        var game = document.createElement('div');
        game.className = GameClasses[webMode]["game"]
    
        GameContainers[webMode].insertAdjacentElement('beforeend',game);
    
        
    
    
        var gameImageBg = document.createElement("a");
        gameImageBg.className = GameClasses[webMode]["gameimage-bg"]
        generateLink(gameImageBg, Game)
    
        game.insertAdjacentElement('beforeend',gameImageBg);
    
    
        var gameImage = document.createElement('img');
        gameImage.className = GameClasses[webMode]["gameimage"] + " asyncImage"
        gameImage.setAttribute("data-src", Game.icon) //--
        gameImage.src = Game.iconLowRes //--
        
        gameImageBg.insertAdjacentElement('beforeend',gameImage);
    
    
    
        
        var gameTitleBox = document.createElement('div');
        gameTitleBox.className = GameClasses[webMode]["gametitlebox"]
        
        game.insertAdjacentElement('beforeend',gameTitleBox);
    
        
        var gameTitle = document.createElement('a');
        gameTitle.className = GameClasses[webMode]["gametitle"]
        gameTitle.textContent = Game.title //--
        generateLink(gameTitle, Game)
        
        gameTitleBox.insertAdjacentElement('beforeend',gameTitle);
    
    
    
    
    }
    
    
    function addElement () {
    
        for(i in GamesJson){
            generateGame(GamesJson[i], "desktop")
        }
    }
}

generateGames()