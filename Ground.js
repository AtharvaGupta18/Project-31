// creating ground class
class Ground {
    constructor() {

        var options = {
            isStatic: true
      }

      this.body = Bodies.rectangle(240, 790, 480, 20, options);
      World.add(world, this.body);

    }

    display(){

      var pos =this.body.position;
      rectMode(CENTER);
      fill("purple");
      rect(pos.x, pos.y, 480, 20);

    }
}