import {COLORS} from "../Constants";

class Simulation{
    constructor(particles,transform){
        this.particles=particles;
        this.mouse={
            radius:30,
            x: undefined,
            y: undefined
        }
        this.transform=transform;

        window.addEventListener('mousemove', event => {
            //Calculate mouse position relative to canvas origin, +10 is to account for scrollbar
            this.mouse.x=event.x-this.transform.translate_x+10;
            this.mouse.y=event.y-this.transform.translate_y+window.scrollY;
        })

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
        let particlesInRange = this.particles.filter(p => p.distToMouse(this.mouse)<this.mouse.radius);
        particlesInRange.forEach(p => p.relocate(this.transform.translate_x*2,this.transform.translate_y*4));
        this.draw();
    }


}

export default Simulation;