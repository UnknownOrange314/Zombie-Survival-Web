/**
 * This object represents a melee attack against another entity.
 * @constructor
 */
function Melee(range,damage){
    this._range=range;
    this._damage=damage;


}

/**
 * Attacks another entity and returns the hit points that are lost.
 * @param aLoc The location where the attack is made.
 * @param others The entities that are being attacked
 */
Melee.prototype.attack=function(aLoc,others){
    var obj=this;
    var dMap={};
    others.forEach(function(other){
        console.log(other+":"+aLoc);
        var dist=other.locDistance(aLoc);
        if(dist<obj._range){
            dMap[other.getLocation()]=obj._damage;
        }
    })
    return dMap;
}

