function generateGames(){
    var GamesJson
    fetch("../data/games.json")
        .then(response => response.json())
        .then(json => {
            GamesJson = json
        })
        .then(document.body.onloadstart = start)
    
    
    const GameContainer = document.getElementById("games-entries-container")
      
    function getLink(Game){
        let link = "/game?game=" + Game.title
        return link
    }
    
    
    function generateGame(Game){
    
        var game = document.createElement('a');
        game.className = "game-entry rounded-effect-and-children"
        game.href = getLink(Game)
        GameContainer.appendChild(game);
    
        var frame = document.createElement('div');
        frame.href = getLink(Game)
        game.appendChild(frame);
    
        var image = document.createElement('img');
        image.className = "gameimage asyncImage card"
        image.src = Game.icon
        frame.appendChild(image);
    
        var imageOverlay = document.createElement('div');
        imageOverlay.className = "imageOverlay"
        frame.appendChild(imageOverlay);
    
        var title = document.createElement('p');
        title.className = "text-game-title"
        title.textContent = Game.title
        game.appendChild(title);
    }
    
    
    function start () {
        for(i in GamesJson){
            generateGame(GamesJson[i])
        }
    }
}

generateGames()