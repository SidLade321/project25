
class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body= Bodies.circle(x,y,radius,options);
        this.radius = radius
        this.image=loadImage("paper.png");

    World.add(world, this.body);
    }
    display(){
        var paperpos = this.body.position;
        push();
        
        ellipseMode(RADIUS);
         circle(this.body.position.x,this.body.position.y, this.radius)
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y , 150);
        
        
        
        pop();

			

			

         


    }

}
//class Paper {
   // constructor(x,y,radius){
     //   var options = {
       //     isStatic: false,
         //   'restitution': 0.3,
           // 'friction':0.5,
            //'density':1.2
        //}
        //this.body= Bodies.circle(x,y,radius,options);
        //this.radius = radius
        //this.image=loadImage("paper.png");

    //World.add(world, this.body);
    //}
   // display(){
     //   var paperpos = this.body.position;
       // push();
        
      //  ellipseMode(RADIUS);
       //  circle(this.body.position.x,this.body.position.y, this.radius)
       // imageMode(CENTER);
        //image(this.image, this.body.x,this.body.y , 100);
       // pop();

			

			

         


   // }

//}