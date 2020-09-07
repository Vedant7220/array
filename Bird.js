class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png");
    this.smokearray=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
   
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position=[this.body.position.x,this.body.position.y]
      this.smokearray.push(position);

    }
    for(var i=0;i<this.smokearray.length;i++){
      image(this.smokeImage,this.smokearray[i][0],this.smokearray[i][1])
    }
  }
}
