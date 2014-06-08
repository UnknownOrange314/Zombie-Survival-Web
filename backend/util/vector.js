/**
 * A vector object. All calculations are done assuming y increases
 * as you go up.
 * @param xPos
 * @param yPos
 * @constructor
 */
function Vector(xPos,yPos){
    this._x=xPos;
    this._y=yPos;
}

Vector.prototype.getX=function(){
    return this._x;
}

Vector.prototype.getY=function(){
    return this._y;
}

Vector.prototype.distance=function(other){
    return Math.sqrt(Math.pow(other._x-this._x,2)+Math.pow(other._y-this._y,2));
}

Vector.prototype.add=function(other){
    this._x=this._x+other._x;
    this._y=this._y+other._y;

}

Vector.prototype.clone=function(){
    return new Vector(this._x,this._y);
}

/**
 * This function checks if two vectors are equal by taking the floor of their x and y coordinates a
 * and comparing them.
 * @param other
 */
Vector.prototype.intEquals=function(other){
    if(Math.floor(this._x)!=Math.floor(other._x)){
        return false;
    }
    if(Math.floor(this._y)!=Math.floor(other._y)){
        return false;
    }
    return true
}

Vector.prototype.getX=function(){
    return this._x;
}

Vector.prototype.getY=function(){
    return this._y;
}

Vector.prototype.angle=function(){
    var x=this._x;
    var y=this._y;
    var a;
    if (x === 0 && y > 0) {
        a = Math.PI / 2;
    }
    if (x === 0 && y < 0) {
        a = -Math.PI / 2;
    }
    if (x > 0) {
        a = Math.atan(y / x);
    }
    if (x < 0) {
        a = Math.atan(-y / -x) + Math.PI;
    }
    if (a < 0) {
        a = a + 2 * Math.PI;
    }
    return a;
}

Vector.prototype.magnitude=function(){
    return Math.sqrt(Math.pow(this._x,2)+Math.pow(this._y,2));
}

Vector.prototype.rotate=function(rot){
    var nAng=this.angle()+rot;
    var mul=this.magnitude();
    this._x=mul*Math.cos(nAng);
    this._y=mul*Math.sin(nAng);
}

/**
 * Returns a vector pointing from the current vector to a destination vector.
 * @param dest The destination vector.
 */
Vector.prototype.vectorTo=function(dest){
    return new Vector(dest._x-this._x,dest._y-this._y);
}
Vector.prototype.toString=function(){
    return this._x+":"+this._y;
}