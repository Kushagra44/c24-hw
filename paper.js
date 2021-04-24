class paper{
    constructor(x, y,r){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            isStatic:false
        }
        this.body = Bodies.circle(x, y, r/2,options);
        this.r=r
        World.add(world, this.body)
      }
      display(){
        var angle = this.body.angle;
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       rectMode(CENTER);
       fill ("blue")
       ellipse( 0, 0, this.r,this.r);
        pop();
      }
}