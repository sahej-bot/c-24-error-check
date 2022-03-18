class pClass{
    constructor(x,y){
        var prop = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,prop);
       this.width = 50
       this.height = 50
       World.add(world,this.body);
    

    }
    display() {
        var pos = this.body.position
       rectMode(CENTER);
       rotate(this.body.angle)
       translate(pos.x,pos.y)
       fill("green"); 
       rect(0,0,this.width,this.height);

    }
}