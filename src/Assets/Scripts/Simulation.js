import {COLORS} from "../Constants";

class Simulation{
    constructor(particles){
        this.particles=particles;
    }

    set_ctx(ctx){
        this.ctx=ctx;
    }

    shuffleParticles(width,height){
        this.particles.forEach(p=>p.relocate(width,height));
    }

    draw(){
        this.ctx.fillStyle = COLORS.detail;
        this.particles.forEach(p => p.draw(this.ctx));
    }

    update(){
        this.ctx.fillStyle = COLORS.detail;
        this.particles.forEach(p => p.update());
        this.draw();
    }
}

export default Simulation;