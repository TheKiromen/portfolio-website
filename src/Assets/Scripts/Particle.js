class Particle{
    constructor(target_x,target_y,size){
        this.current_x=0;
        this.current_y=0;
        this.target_x=target_x;
        this.target_y=target_y;
        this.size=size;
    }

    //TODO add motion based on distance from target location
    relocate(width,height){
        this.current_x=Math.floor(Math.random()*width-width/2)-this.size/2;
        this.current_y=Math.floor(Math.random()*height-height/2)-this.size/2;
    }

    update(){
        let vx = (this.target_x-this.current_x)/15;
        let vy = (this.target_y-this.current_y)/15;
        let dist = Math.sqrt(vx*vx+vy*vy);

        if(dist<0.1){
            this.current_x=this.target_x;
            this.current_y=this.target_y;
        }else{
            this.current_x+=vx;
            this.current_y+=vy;
        }
    }

    draw(ctx){
        ctx.fillRect(this.current_x-this.size/2,this.current_y-this.size/2,this.size,this.size);
    }
}

export default Particle;
