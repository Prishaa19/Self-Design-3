class Car{
    constructor(x,y,width,height){
    this.image = loadImage("Images/car.png");
    //this.body = Bodies.rectangle(x,y,width,height);
    }
    display(){
      pos = this.body.position;
      image(this.image,pos.x,pos.y,this.width,this.height);
    }
}