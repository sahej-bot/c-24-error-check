class logClass{
    constructor(x,y,w,angle){
        var prop = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,w,20,prop);
       this.width = w
       this.height = 20
       Matter.Body.setAngle(this.body,angle)
       World.add(world,this.body);
    

    }
    display() {
        var pos = this.body.position
       rectMode(CENTER);
       rotate(this.body.angle)
       translate(pos.x,pos.y)
       fill("white"); 
       rect(0,0,this.width,this.height);

    }
}