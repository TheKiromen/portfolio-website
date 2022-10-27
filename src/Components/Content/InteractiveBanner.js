import Banner from "../../Assets/Images/banner.png";
import Particle from "../../Assets/Scripts/Particle";
import Simulation from "../../Assets/Scripts/Simulation";

function InteractiveBanner(){
    //Object references
    let navbar=document.getElementById("menu");;
    let canvas;
    let ctx;
    let image = new Image();
    let particles = [];
    let simulation = new Simulation(particles);

    //Helper variables
    let offset,width=window.innerWidth,height, imageWidth, imageHeight;

    const handleResize = () => {
        //Update website dimensions and canvas offset
        width=window.innerWidth;
        height=document.body.scrollHeight;
        offset=navbar.scrollHeight+10;

        //Set canvas dimensions to fit browser size
        canvas.width=width;
        canvas.height=height;

        //Clear the canvas
        ctx.clearRect(0,0, canvas.width,canvas.height)

        //Move origin to the middle
        ctx.translate(width/2,offset+135);

        //Draw the image
        ctx.drawImage(image,-imageWidth/2,-imageHeight/2);

        //Draw the current state of animation
        simulation.shuffleParticles(width,1000)
        simulation.animate();
    }

    //Get canvas context on page load
    window.addEventListener("load", () => {
        //Get object references
        canvas=document.getElementsByTagName('canvas')[0];
        navbar=document.getElementById("menu");
        ctx=canvas.getContext('2d');

        //Setup banner image
        //TODO make the banner image bigger?
        image.src=Banner;
        simulation.set_ctx(ctx);

        //Set canvas position
        canvas.style.width='100%';
        canvas.style.position='absolute';
        canvas.style.top="0";
        canvas.style.zIndex="-1";
    });

    //Draw onto canvas only once the image is loaded
    image.addEventListener("load",()=>{
        imageWidth=image.width;
        imageHeight=image.height;

        //TODO split image into particles
        for(let step=0;step<1000;step++){
            particles.push(new Particle(0,0,10));
        }

        //Randomly distribute particles in the window
        simulation.shuffleParticles(width,1000)

        //Draw to canvas
        handleResize();
    });

    //Redraw the canvas on window resize
    window.addEventListener("resize",handleResize);


    return(
        <canvas/>
    )
}

export default InteractiveBanner;