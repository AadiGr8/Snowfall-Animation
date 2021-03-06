class Snow{
    constructor(x,y){
        var options = {
            friction : 1,
            density : 1,
            isStatic : false,
            restitution : 1
        }

        this.x = x;
        this.y = y;
        this.r = 100;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("snow4.webp");
        
        World.add(world,this.body);

    }

    display(){

        //for(i=0; i<100; i++){
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,100,100);
        //}
    }
}   