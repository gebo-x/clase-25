class Rectangulos
{
  constructor(x, y, w, h) //que propiedades tendra el objeto
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);//se agrega al mundo
  }

  show() {
    var pos = this.body.position;
    Matter.body.rotate(this.body,angle);

    push();//paera ca´pturar la nueva osision 
    translate(pos.x, pos.y);//para guardar la posision
    rotate(angle);
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(0, 0, this.w, this.h);//siempre arriva de pop
    pop();//regresa a la vieja posision
    angle+=0.1;
  }
}