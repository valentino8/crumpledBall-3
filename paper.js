class Paper{

    constructor(x,y,radius){

        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 0.1
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("paper1.png");
        // this.image.style.width = this.body.width;
        // this.image.style.height= this.body.height;
        

        
        
        World.add(world,this.body);

    }

    display(){
        
        var pos = this.body.position;
        
        fill (235, 52, 100);
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.radius,33,33);
        

    }



};