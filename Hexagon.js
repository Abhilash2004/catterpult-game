class Hexagon{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x, y, 30, options, 6);
      //this.width = width;
      
      //this.height = height;
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      push()
      fill(229,240,12);
       ellipse(pos.x, pos.y, 30, 30,6);
      
       pop()
    }
  }; 