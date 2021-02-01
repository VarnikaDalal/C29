class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.img1=loadImage("sprites/sling1.png");
        this.img2=loadImage("sprites/sling2.png");
        this.img3=loadImage("sprites/sling3.png");
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            image(this.img1,200,20);
            image(this.img2,170,20);
            if(pointA.x<220){

            strokeWeight(6);
            stroke(49,23,8);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.img3,pointA.x-25, pointA.y-10,10,30);
            }
            else{
                strokeWeight(3);
                stroke(49,23,8);
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.img3,pointA.x+23, pointA.y-10,10,30);

            }
           
        }

    }
    
}