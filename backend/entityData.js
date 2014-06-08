/**
 * This object is responsible for storing all the entities in the game.
 * @constructor
 */
function EntityData(mapSize,gridNum){

    var data=Array();
    var numCells=mapSize/gridNum;
    for(var i=0;i<numCells;i++){
        var rowData=Array();
        for(var j=0;j<numCells;j++){
            rowData.push(new HashSet(function(entity){
               return entity.hashCode();
            }));
        }
        data.push(rowData);
    }

    /**
     * These functions perform transformations to and from grid coordinates. The grid coordinates
     * start at (0,0)
     */

    /**
     * Transforms from world coordinates to grid coordinates.
     */
    this.toGridCoordinates=function(loc){
        return new Vector(this.getGridX(loc.getX()),this.getGridY(loc.getY()));
    }

    this.getGridX=function(x){
        return Math.floor(x/gridNum);
    }

    this.getGridY=function(y){
        return Math.floor(y/gridNum);
    }

    /**
     * Returns the top left of the grid
     * @param loc
     * @returns {Vector}
     */
    this.toWorldCoordinates=function(loc){
        return new Vector(loc.getX()*(mapSize/gridNum),loc.getY()*(mapSize/gridNum));
    }


    /**
     * Adds an entity to the map.
     * @param entity
     */
    this.push=function(entity){
        var gLoc=this.toGridCoordinates(entity.getLocation());
        data[gLoc.getY()][gLoc.getX()].push(entity);
        console.log("Size:"+entity.getSize());

    }

    this.remove=function(entity){
        var gLoc=this.toGridCoordinates(entity.getLocation());
        data[gLoc.getY()][gLoc.getX()].remove(entity);
    }

    this.size=function(){
        var size=0;
        for(var i=0;i<numCells;i++){
            for(var j=0;j<numCells;j++){
                size+=data[j][i].size();
            }
        }
        return size;
    }

    /**
     * Finds the entities that are near a location.
     * @param location The location.
     * @param radius The maximum distance away from the location.
     */
    this.nearbyPoint=function(location,radius){
        var nearbyEntities=Array();
        var gLoc=this.toGridCoordinates(location);
        for(var x=gLoc.getX()-1;x<gLoc.getX()+2;x++){
            for(var y=gLoc.getY()-1;y<gLoc.getY()+2;y++){
                data[y][x].forEach(function(entity){
                    console.log(entity.getLocation().toString()+":"+location.toString());
                    var eDist=entity.locDistance(location);
                    console.log(eDist+":"+entity.getSize()+":"+radius+" code"+entity.hashCode());
                    if(eDist-entity.getSize()-radius<0){
                        console.log("Collision");
                        nearbyEntities.push(entity);
                    }
                });
            }
        }
        return nearbyEntities;
    }


    /**
     * Finds a list of entities that are near a line.
     * @param start
     * @param end
     */
    this.nearbyLine=function(start,end,dist){
        return Array();
    }

}
