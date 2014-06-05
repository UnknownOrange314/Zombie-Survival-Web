
function LocalConnection(){
    var game=new gameManager()

    this.getState=function(){
        return game.updateState()
    }
}