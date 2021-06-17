class Polygon{
    constructor(x, y, width, height) {
        var options = {
                'friction':0.15,
                'density':0.5,
                'restitution':0.1        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("polygon.png")
        World.add(world, this.body);
      }
      display(){
        
        var pos= this.body.position;

        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50)
    
      }
}
