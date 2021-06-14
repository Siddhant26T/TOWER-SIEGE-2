class Box2{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':1.0,
            'density':0.001
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.visibility = 255;
        World.add(world, this.body);
        
      }
      display(){
        
      if(this.body.speed < 3)
      {
      var angle = this.body.angle;
      //console.log(this.body.speed);
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill ("red");
      rect( 0, 0, this.width, this.height);
      pop();
      }
      else
      {
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility - 5;
      //tint (255,this.visibility);
      pop();
      }
       
      }
  }