/**
 * This object represents objects on the map.
 * @param loc Where the entity is located on the map.
 * @param speed How fast the entity can move.
 * @param size How big the object is. The entity is represented as a circle.
 * @param tSpeed The turning speed of the entity.
 * @param eType An object representing the behavior of the entity.
 * @param attack The way the entity attacks
 * @constructor
 */
function Entity(loc,speed,size,tSpeed,eType){
    this._location=loc;
    this._speed=speed;
    this._size=size;
    this._turnSpeed=tSpeed;
    this._entityType=eType;
    this._hitPoints=100;

    this._ID=Entity.count; //Constant variable that represents ID.
    Entity.count++;
}



/**
 * Rotates the entity by 1 degree
 */
Entity.prototype.rotateRight=function(){
    this._speed.rotate(-this._turnSpeed);

}

/**
 * Rotates the entity by 1 degree
 */
Entity.prototype.rotateLeft=function(){
    this._speed.rotate(1*this._turnSpeed);
}

/**
 * Moves the entity forward. This method does not do collision detection.
 */
Entity.prototype.move=function(){
    this._location.add(this._speed);
}

/**
 * The distance of the entity from another as an integer
 * @param other The other entity.
 */
Entity.prototype.entityDistance=function(other){
    return this._location.distance(other._location);
}

/**
 * The distance of the entity from a vector.
 * @param other
 */
Entity.prototype.locDistance=function(other){
    return this._location.distance(other);
}

/**
 * This function checks to see if the entity will collide with another entity upon movement.
 * @param other
 */
Entity.prototype.nextMove=function(other){
    var myLoc=this._location;
    var oLoc=other._location;
    var nextMove=this._location.clone();
    nextMove.add(this._speed);
    return nextMove;
}

Entity.prototype.getLocation=function(){
    return this._location;
}

Entity.prototype.getHitPoints=function(){
    return this._hitPoints;
}

Entity.prototype.addHitPoints=function(add){
    this._hitPoints+=add;
}

Entity.prototype.getName=function(){
    if(this._entityType!=null){
        return this._entityType.getName();
    }
    return "Default Entity";
}

Entity.prototype.hashCode=function(){
    return this._ID;
}

Entity.prototype.getSize=function(){
    return this._size;
}

Entity.count=0;

