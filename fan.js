class Fan
{
  constructor(x, y, w, h, angle) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.angle = angle;
    World.add(world, this.body);
  }

  display() {
    let pos = this.body.position;
    let angle = this.body.angle;

    Matter.Body.rotate(this.body,this.angle)

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill("green");
    rect(0, 0, this.w, this.h);
    pop();
  }
}