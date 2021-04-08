class Block{
    constructor(x, y) {
        var options = {
            // 'restitution':0.8,
            // 'friction':1.0,
            // 'density':1.0
            // isStatic:true
        }
        this.body = Bodies.rectangle(x, y,40, 40, options);
        // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,40, 40)
      }
}