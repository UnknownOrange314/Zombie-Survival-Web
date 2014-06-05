/**
 * This object represents objects on the map.
 * @param loc Where the entity is located on the map.
 * @param speed How fast the entity can move.
 * @param size How big the object is. The entity is represented as a circle.
 * @constructor
 */
function Entity(loc,speed,size){
    this._location=loc;
    this._speed=speed;
    this._size=size;
    this._turnSpeed=0.01;
}

/**
 * Rotates the entity by 1 degree
 */
Entity.prototype.rotateRight=function(){
    this._speed.rotate(this._turnSpeed);

}

/**
 * Rotates the entity by 1 degree
 */
Entity.prototype.rotateLeft=function(){

}

/**
 * Moves the entity forward. This method does not do collision detection.
 */
Entity.prototype.move=function(){
    this._location.add(this._speed)
}

/**
 * The distance of the entity from another as an integer
 * @param other The other entity.
 */
Entity.prototype.distance=function(other){
    return this._location.distance(other._location);
}

/**
 * The distance of the entity from a point.
 * @param other
 */
Entity.prototype.locDistance=function(other){

}

/**
 * This function checks to see if the entity will collide with another entity upon movement.
 * @param other
 */
Entity.prototype.nearbyMove=function(other){
    var myLoc=this._location;
    var oLoc=other._location;
    var eDist=myLoc.clone().add(this._speed).distance(oLoc);
    if(eDist-this._size-other._size<0){
        return true;
    }
    return false;
}


Entity.prototype.getLocation=function(){
    return this._location;
}

