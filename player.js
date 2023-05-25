export class Player{
    constructor(game){
        this.game = game;

        // get the player from sprite
        this.image=document.getElementById("player");

        // dimension of the sprite sheet
        this.width=100;
        this.height=91.3;
 

        //position
        this.x=0;
        this.y=this.game.height - this.height;

        //speed
        this.speed=0;
        this.maxSpeed=10;

    }

    update(input){
        this.x +=this.speed;
        if(input.includes("ArrowRight"))this.speed=this.maxSpeed;
        else if(input.includes("ArrowLeft"))this.speed-= -this.maxSpeed;
        else this.speed=0;

    }

    draw( context) {

        context.drawImage(this.image,0,0,this.width,this.height,
            this.x,this.y,this.width,this.height);
    }

}