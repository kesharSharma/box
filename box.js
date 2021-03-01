class Box {

    //properties
    constructor(x,y,width,height){
        var Options={
            restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,Options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    //function
    display(){
        var pos = this.body.position;
        //to start applying changes from this point
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("blue");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        //to stop applying changes at this point
        pop();
    }
}