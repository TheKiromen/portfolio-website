import BannerLarge from "../../Assets/Images/bannerLarge.png";
import BannerSmall from "../../Assets/Images/bannerSmall.png";
import BannerExtraSmall from "../../Assets/Images/bannerExtraSmall.png";
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
    let offset, width=window.innerWidth, height, imageWidth, imageHeight,particleSize=2;


    //Draw single frame of animation
    function frame(){
        //Clear the canvas
        ctx.clearRect(-canvas.width/2,-canvas.height/2,width,height);
        //Draw current frame
        simulation.update();
        //Repeat at 60fps
        requestAnimationFrame(frame);
    }

    const handleResize = () => {
        //Update website dimensions and canvas offset
        width=window.innerWidth;
        //Fix for particles not aligning properly
        let pixel_diff = width%particleSize;
        if(pixel_diff!=0){
            width+=pixel_diff;
        }
        height=document.body.scrollHeight;
        offset=navbar.scrollHeight+10;

        //Set canvas dimensions to fit browser size
        canvas.width=width;
        canvas.height=height;

        //Clear the canvas
        ctx.clearRect(0,0, canvas.width,canvas.height)

        //Move origin to the middle
        ctx.translate(width/2,offset+135);


        //Draw the current state of animation
        simulation.draw();
    }

    //Get canvas context on page load
    window.addEventListener("load", () => {
        //Get object references
        canvas=document.getElementsByTagName('canvas')[0];
        navbar=document.getElementById("menu");
        ctx=canvas.getContext('2d');

        //Setup banner image
        if(window.innerWidth<400){
            image.src=BannerExtraSmall;
        }else if(window.innerWidth<600){
            image.src=BannerSmall;
        }else{
            image.src=BannerLarge;
        }


        simulation.set_ctx(ctx);

        //Set canvas position
        canvas.style.width='100%';
        canvas.style.position='absolute';
        canvas.style.top="0";
        canvas.style.zIndex="-1";
    });

    //Draw onto canvas only once the image is loaded
    image.addEventListener("load",()=>{
        //Get dimensions
        imageWidth=image.width;
        imageHeight=image.height;
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;


        //Draw the image
        ctx.drawImage(image,0,0);

        //Get image data
        let imageData = ctx.getImageData(0,0,imageWidth,imageHeight).data;

        //Convert non-transparent pixels to particles
        for(let y=0;y<imageHeight;y+=particleSize){
            for(let x=0;x<imageWidth;x+=particleSize){
                const index = (y*imageWidth+x)*4; //Each pixel is 4 bytes
                //Find all pixels that are not fully transparent, i.e. not part of the background
                if(imageData[index+3]!=0){
                    let target_x = Math.floor(x-imageWidth/2);
                    let target_y = Math.floor(y-imageHeight/2);
                    //Create new particle
                    particles.push(new Particle(target_x,target_y,particleSize));
                }
            }
        }

        //Randomly distribute particles in the window
        simulation.shuffleParticles(width,1000)

        //Draw to canvas
        handleResize();

        //Begin the animation
        frame();

    });

    //Redraw the canvas on window resize
    window.addEventListener("resize",handleResize);

    //TODO add mouse interaction

    return(
        <canvas/>
    )
}

export default InteractiveBanner;