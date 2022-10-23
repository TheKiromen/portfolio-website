import Banner from "../../Assets/Images/banner.png";

function InteractiveBanner(){
    //Object references
    let navbar;
    let canvas;
    let ctx;
    let image = new Image();

    //Helper variables
    let offset,width,height, imageWidth, imageHeight;

    const handleResize = () => {
        //Get website dimensions and canvas offset
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
        //TODO create the particle simulation from the image and draw it here
        ctx.drawImage(image,-imageWidth/2,-imageHeight/2);

        // ctx.beginPath();
        // ctx.arc(0, 0, 10, 0, 2 * Math.PI);
        // ctx.stroke();

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
        handleResize();
    });

    //Redraw the canvas on window resize
    window.addEventListener("resize",handleResize);


    return(
        <canvas/>
    )
}

export default InteractiveBanner;