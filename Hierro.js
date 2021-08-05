class Hierro{
    constructor(x,y,width,height){
var options={
        restitution:0.8,
         friction:3,
        density:30,
}
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight(2);
        stroke("black");
        fill("gray")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
       
        pop();


    }
}