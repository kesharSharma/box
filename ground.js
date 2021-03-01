class Ground{
    constructor(x,y,width,height){
        var Options={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,width,height,Options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    

    display(){
        //namespaced
        
        var pos = this.body.position;
        push();
        fill("yellow");
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        pop();
    }
}
