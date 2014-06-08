test("Vector distance test",function(){
    var vect=new Vector(0.0,0.0);
    var vect2=new Vector(0.0,0.0);
    var vect3=new Vector(4.0,3.0);
    var vect4=new Vector(3.0,4.0);

    //Test distance
    ok(vect.distance(vect2)==0);
    ok(vect2.distance(vect3)==5);
    ok(vect.distance(vect3)==vect.distance(vect4));
});

test("Vector addition test",function(){
    var vect=new Vector(0.0,0.0);
    var vect2=new Vector(0.0,0.0);
    var vect3=new Vector(4.0,3.0);
    //Test addition
    vect.add(vect2);
    ok(vect.getX()==0);
    ok(vect.getY()==0);
    vect.add(vect3);
    ok(vect.getX()==4.0);
    ok(vect.getY()==3.0);
});

test("Vector copy test",function(){
    var vect=new Vector(0.0,0.0);
    var vect3=new Vector(4.0,3.0);
    var vect4=new Vector(3.0,4.0);

    var vect4C=vect4.clone();
    vect4C.add(vect3);
    ok(vect4C.getX()!=vect.getX());
    ok(vect4C.getY()!=vect.getY());
});

test("Vector equality test",function(){

    //Test equality
    var vect=new Vector(0.0,0.0);
    var vect2=new Vector(0.0,0.0);
    var vect3=new Vector(3.0,4.0);
    var vect4=new Vector(0.1,0.2);

    ok(vect.intEquals(vect2));
    ok(!vect.intEquals(vect3));
    ok(vect4.intEquals(vect));
});

test("Vector magnitude test",function(){
    var zVect=new Vector(0.0,0.0);
    var vect=new Vector(4.0,3.0);
    ok(zVect.magnitude()==0);
    ok(vect.magnitude()==5.0);
});

test("Vector angle test",function(){
    var v45=new Vector(1.0,1.0);
    var v235=new Vector(-1.0,-1.0);
    ok(v45.angle()==Math.PI/4);
    ok(v235.angle()==5*Math.PI/4);
});

test("Vector rotation test",function(){

    //Test vector rotation.
    var v0=new Vector(1.0,0.0);
    v0.rotate(Math.PI/4);
    ok(v0.angle()==Math.PI/4,v0.angle());
    v0.rotate(Math.PI);
    ok(v0.angle()==5*Math.PI/4,v0.angle());
    v0.rotate(3*Math.PI/4);
    ok(v0.angle()==2*Math.PI,v0.angle());
});
//Test vector pointing from one location to another.

test("Vector subtraction",function(){
    var center=new Vector(0,0);
    var top=new Vector(0,100);
    var left=new Vector(200,0);

    var d1=center.vectorTo(left);
    equal(d1.getX(),200);
    equal(d1.getY(),0);

    var d2=center.vectorTo(top);
    equal(d2.getX(),0);
    equal(d2.getY(),100);
});

test("Entity distance test",function(){
    var e1=new Entity(new Vector(0.0,0.0),new Vector(1.0,0.0),3,Math.PI/180);

    //Check if distance to a location can be calculated.
    equal(e1.locDistance(new Vector(4.0,3.0)),5);

})

test("Entity movement test",function(){
    var e1=new Entity(new Vector(0.0,0.0),new Vector(1.0,0.0),3,Math.PI/180);
    var e2=new Entity(new Vector(1.0,0.0),new Vector(1.0,1.0),3,Math.PI/180);

    //Check if moving works.
    ok(e1.distance(e2)==1);
    e1.move();
    ok(e1.distance(e2)==0);
    //Check if rotating works.
    for(var i=0;i<90;i++){
        e1.rotateLeft();
    }
    e1.move();
    var dist=e1.locDistance(new Vector(1,1));
    ok(dist<0.000001,dist);

    for(i=0;i<90;i++){
        e1.rotateRight();
    }
    e1.move();
    dist=e1.locDistance(new Vector(2,1));
    ok(dist<0.00001,dist);
});


test("Entity detection test",function(){
    var center=new Entity(new Vector(0.0,0.0),new Vector(1.0,1.0),1);
    var frontNear=new Entity(new Vector(1.0,1.0),new Vector(2.0,2.0),1);
    var frontFar=new Entity(new Vector(3.0,3.0),new Vector(1.0,1.0),1);
    var back=new Entity(new Vector(-1.0,-1.0),new Vector(1.0,1.0),1);
    ok(center.nearbyMove(frontNear));
    ok(!center.nearbyMove(frontFar));
    ok(!center.nearbyMove(back));
});

test("Zombie Move Test",function(){

    var z=new Zombie();
    var z2=new Entity(null,null,null,null,new Zombie());
    var enemy=new Entity();

    var eVect=Array();

    //Try a simple move command.
    eVect.push(new Vector(100,100));
    z=new Zombie();
    equal(z.determineMove(new Vector(200,200),eVect).angle(),5*Math.PI/4);

})

/**
 * These are tests on types of attacks that can be done.
 * It will be up to the game manager to find relevant targets.
 *  -During the game update phase, get range of weapon and find entities within range.
 *      -Have object that represents the range of the weapon.
 *      -Save list of entities and send it to weapon for processing.
 *
 */
test("Melee Attack",function(){
    var m=new Melee(6,4);
    var targets=Array();
    targets.push(new Entity(new Vector(2,2)));
    targets.push(new Entity(new Vector(400,400)));
    var d1= m.attack(new Vector(0,0),targets);
    equal(Object.keys(d1).length,1);
});

test("Pistol Attack",function(){
    var p=new Pistol(400,20);
    var targets=Array();
    targets.push(new Entity(new Vector(200,0)));
    targets.push(new Entity(new Vector(300,0)));
    targets.push(new Entity(new Vector(900,0)));
    targets.push(new Entity(new Vector(100,0)));
    var d1= p.attack(new Vector(0,0),targets);
    equal(Object.keys(d1).length,1)
});

/**
 * Tests to see if grid transformations work
 */
test("Grid transformation test",function(){

})

/**
 * Tests to see if entities can be stored in a manner that allows for efficient collision detection.
 */
test("Nearby line test",function(){

})

test("Nearby point test",function(){

});

test("GameManager Test",function(){
    /*
        TODO
        -See if the map is setup properly.
        -See if the map receives commands and takes the appropriate action(Commands listed in human section)
        -See if the zombies do something each time the game state is updated.
     */
})


