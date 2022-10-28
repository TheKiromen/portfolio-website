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

    animate(){
        this.ctx.fillStyle = COLORS.detail;
        this.particles.forEach(p => p.draw(this.ctx));
    }
}

export default Simulation;