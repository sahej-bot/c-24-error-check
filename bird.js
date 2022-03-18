class birdClass{
    constructor(x,y,w,h){
        var prop = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,w,h,prop);
       this.width = w
       this.height = h
       World.add(world,this.body);
    

    }
    display() {
        var pos = this.body.position
       rectMode(CENTER);
       rotate(this.body.angle)
       translate(pos.x,pos.y)
       fill("blue"); 
       rect(0,0,this.width,this.height);

    }
}