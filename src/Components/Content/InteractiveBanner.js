import {Box} from "@mui/material";
import {COLORS} from "../../Assets/Constants";


function InteractiveBanner(){
    //Object references
    let wrapper;
    let canvas;
    let ctx;

    //Helper variables
    let scale,width,height;

    const handleResize = () => {
        //Get dimensions from parent
        width=wrapper.clientWidth;
        height=wrapper.clientHeight;

        //Set canvas dimensions equal to parent's dimensions
        canvas.width=wrapper.clientWidth;
        canvas.height=wrapper.clientHeight;

        //Calculate scale
        scale=wrapper.clientHeight/400;
        ctx.scale(scale,scale);

        //Move origin to the middle
        ctx.translate(width/2,height/2);

        //Clear the canvas
        ctx.clearRect(0,0, canvas.width,canvas.height)

        //TODO scale the contents of the canvas?
        //TODO shift origin the the middle of the canvas?
        //TODO draw the image

        ctx.beginPath();
        ctx.arc(0, 0, 50, 0, 2 * Math.PI);
        ctx.stroke();
    }

    //Get canvas context on page load
    window.addEventListener("load", () => {
        canvas=document.getElementsByTagName('canvas')[0];
        wrapper=document.getElementById("interactiveBanner");
        ctx=canvas.getContext('2d');
        canvas.style.width='100%';
        canvas.style.height='100%';
        handleResize();
    });

    window.addEventListener("resize",handleResize);

    return(
        <Box
            id={"interactiveBanner"}
            width={"100%"}
            height={{
                xs:200,
                sm:300,
                lg:400,
            }}
            bgcolor={COLORS.secondary}
            sx={{mb:2}}
        >
            <canvas></canvas>
        </Box>
    )
}

export default InteractiveBanner;