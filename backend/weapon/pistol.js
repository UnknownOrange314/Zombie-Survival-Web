function Pistol(range,damage){
    this._range=range;
    this._damage=damage;


}

Pistol.prototype.attack=function(aLoc,others){
    var dMap={};
    var cDist=9999;
    var cEnt=null;
    var obj=this;
    others.forEach(function(other){
        var dist=other.locDistance(aLoc);
        if(dist<cDist&&dist<obj._range){
            dist=cDist;
            cEnt=other;
        }
    })
    dMap[cEnt.getLocation()]=this._damage;
    return dMap;
}
