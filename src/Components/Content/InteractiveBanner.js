
function InteractiveBanner(){
    //Object references
    let navbar;
    let canvas;
    let ctx;

    //Helper variables
    let offset,width,height;

    const handleResize = () => {
        //Get website dimensions and canvas offset
        width=window.innerWidth;
        height=document.body.scrollHeight;
        offset=navbar.scrollHeight+10;

        //Set canvas dimensions to fit browser size
        canvas.width=width;
        canvas.height=height;


        //Move origin to the middle
        ctx.translate(width/2,offset+135);

        //Clear the canvas
        ctx.clearRect(0,0, canvas.width,canvas.height)

        //TODO draw the image

        ctx.beginPath();
        ctx.arc(0, 0, 100, 0, 2 * Math.PI);
        ctx.stroke();
    }

    //Get canvas context on page load
    window.addEventListener("load", () => {
        //Get object references
        canvas=document.getElementsByTagName('canvas')[0];
        navbar=document.getElementById("menu");
        ctx=canvas.getContext('2d');

        //Set canvas position
        canvas.style.width='100%';
        canvas.style.position='absolute';
        canvas.style.top="0";
        canvas.style.zIndex="-1";

        //Redraw the canvas
        handleResize();
    });

    //Redraw the canvas on window resize
    window.addEventListener("resize",handleResize);

    return(
        <canvas/>
    )
}

export default InteractiveBanner;