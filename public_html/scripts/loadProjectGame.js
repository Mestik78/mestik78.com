function loadGame(){
    
    
    var currentGame
    var gameIndex = -1

    var windowLoaded = false

    var GamesJson
    fetch("../publicDatabase/games.json")
        .then(response => response.json())
        .then(json => {
            GamesJson = json
        })
        .then(window.onload = start)
    
    
    
    
    
    function start(){
        if (windowLoaded){
            console.log("start")
        
            var params = {};
            location.search.slice(1).split("&").forEach(function(pair) {
                pair = pair.split("=");
                params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            });
            
            currentGame = params.game
            console.log(currentGame)
            
            for(i in GamesJson){
                if (GamesJson[i].title == currentGame){
                    gameIndex = i
                }
            }
        
            if (gameIndex == -1){
                //window.location.href = 'index.html';
            }
            else{
                setupPage()
            }
        
        
        
        function setupPage(){
            
            gameInfo = GamesJson[gameIndex]
        
            var children = document.getElementById("GameTypes").children
            
            for (let i = 0; i < children.length; i++) {
                console.log(children[i])
                if (children[i].classList[0] != gameInfo.type){
                    children[i].classList += " hide"
                }
            }
    
    
            switch (gameInfo.type){
                case "Unity":
                 
                    var projectGame = document.getElementById("UnityGame")
                    projectGame.src = "./publicDatabase/games/" + gameInfo.title + "/index.html"
    
                    break;

                case "Scratch":

                    var projectGame = document.getElementById("ScratchGame")
                    projectGame.src = "https://scratch.mit.edu/projects/embed/" + gameInfo.data.ScratchId + "/?autostart=true"

                    break
            }
    
        }   
        }else{windowLoaded++}
    }
}


loadGame()