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

        // player weight
        this.weight=0;
        this.vy=0;

    }

    update(input){
        // horizontal movement
        this.x +=this.speed;
        if(input.includes("ArrowRight"))this.speed=this.maxSpeed;
        else if(input.includes("ArrowLeft"))this.speed= -(this.maxSpeed);
        else this.speed=0;

        // avoid moving player outside of bounds of the canvas
        if(this.x<0) this.x=0;
        if(this.x>this.game.width - this.width) this.x=this.game.width - this.width;
        
        // vertical movement
        if(input.includes("ArrowUp") && this.onGround()) {
            this.vy -=20;
           
        };

        this.y += this.vy;

        if(!this.onGround()) {
            this.vy +=this.weight;
        }else{
            this.vy=0;
        }

        
    }

    draw( context) {

        context.drawImage(this.image,0,0,this.width,this.height,
            this.x,this.y,this.width,this.height);
    }

    onGround() {
        return this.y >= this.game.height - this.height;
    }

}