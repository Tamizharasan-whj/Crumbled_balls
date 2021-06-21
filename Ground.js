class Ground{
     
    constructor(x,y,width,height){
      
        var Rect_options={
            isStatic:true,
            
        }
     
       this.x = x,
       this.y = y,
       this.width = width,
       this.height = height
       this.body = Bodies.rectangle(x,y,width,height,Rect_options);
       World.add(world,this.body);  
 


    }
    display(){
       var pos = this.body.position;
       push();
       stroke(189);
       rect(pos.x,pos.y,this.width,this.height);
       pop();
    }








}