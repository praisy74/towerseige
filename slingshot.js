class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
 
    display(){
        if(this.chain.bodyA!==null)
        {
        var poi = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(poi.x, poi.y, pointB.x, pointB.y);
        }
    }
    

fly()
{
    this.chain.bodyA=null;
}
}