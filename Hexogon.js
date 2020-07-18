class Hexagon {
    constructor(x, y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':1.0
      }

      this.x=x;
      this.y=y;
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height=height;
      
      
      World.add(world, this.body);
       
    }
    display(){
      var pos =this.body.position;
       
      var angle = this.body.angle;
      push();
  
       
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(190,140,10);
      strokeWeight=0
      rect(0,0, this.width, this.height);
      
      pop();

      
    }
  };
  