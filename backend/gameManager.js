
function GameManager(){

    function createGame(){
        var dSpeed=new Vector(1,1);
        var p1=new Entity(new Vector(100,100),dSpeed,20,0.01,new HumanPlayer());
        var e1=new Entity(new Vector(200,100),dSpeed,20,0.01,new Zombie());
        var e2=new Entity(new Vector(300,100),dSpeed,20,0.01,new Zombie());
    }
    function updateState(){
        return {}
    }
}
