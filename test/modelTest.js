

test("Vector test",function(){

    var vect=new Vector(0.0,0.0);
    var vect2=new Vector(0.0,0.0);
    var vect3=new Vector(4.0,3.0);
    var vect4=new Vector(3.0,4.0);

    //Test distance
    ok(vect.distance(vect2)==0);
    ok(vect2.distance(vect3)==5);
    ok(vect.distance(vect3)==vect.distance(vect4));

    //Test addition
    vect.add(vect2);
    ok(vect.getX()==0);
    ok(vect.getY()==0);
    vect.add(vect3);
    ok(vect.getX()==4.0);
    ok(vect.getY()==3.0);

    //Test copy
    var vect4C=vect4.clone();
    vect4C.add(vect3);
    ok(vect4C.getX()!=vect.getX());
    ok(vect4C.getY()!=vect.getY());

    //Test equality
    vect=new Vector(0.0,0.0);
    vect2=new Vector(0.0,0.0);
    vect3=new Vector(3.0,4.0);
    vect4=new Vector(0.1,0.2);

    ok(vect.intEquals(vect2));
    ok(!vect.intEquals(vect3));
    ok(vect4.intEquals(vect));

    //Test vector magnitude.
    var zVect=new Vector(0.0,0.0);
    vect=new Vector(4.0,3.0);
    ok(zVect.magnitude()==0);
    ok(vect.magnitude()==5.0);

    //Test vector angle.
    var v45=new Vector(1.0,1.0);
    var v235=new Vector(-1.0,-1.0);
    ok(v45.angle()==Math.PI/4);
    ok(v235.angle()==5*Math.PI/4);

    //Test vector rotation.
    var v0=new Vector(0.0,0.0);
    v0.rotate(Math.PI/2);
    ok(v0.angle()==Math.PI/2,"Angle:"+v0.angle());
    v0.rotate(Math.PI);
    ok(v0.angle()==5*Math.PI/4,v0.angle());
    v0.rotate(3*Math.PI/4);
    ok(v0.angle()==0);

})


test("Entity test",function(){

    var e1=new Entity(new Vector(0.0,0.0),new Vector(1.0,0.0),3);
    var e2=new Entity(new Vector(1.0,0.0),new Vector(1.0,1.0),3);

    //Check if moving works.
    ok(e1.distance(e2)==1);
    e1.move();
    ok(e1.distance(e2)==0);

    //Check if rotating works.
    for(var i=0;i<90;i++){
        e1.rotateLeft();
    }
    e1.move();
    ok(e1.locDistance(new Vector(1,1))==0);

    for(i=0;i<90;i++){
        e1.rotateRight();
    }
    e1.move();
    ok(e1.locDistance(new Vector(2,1)==0));


    //Test if an entity can detect other nearby entities.
    var center=new Entity(new Vector(0.0,0.0),new Vector(1.0,1.0),1);
    var frontNear=new Entity(new Vector(1.0,1.0),new Vector(2.0,2.0),1);
    var frontFar=new Entity(new Vector(2.0,2.0),new Vector(1.0,1.0),1);
    var back=new Entity(new Vector(-1.0,-1.0),new Vector(1.0,1.0),1);
    ok(center.nearbyMove(frontNear));
    ok(!center.nearbyMove(frontFar));
    ok(!center.nearbyMove(back));




})