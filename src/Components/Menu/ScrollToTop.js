import {Box, Fade, useScrollTrigger} from "@mui/material";

function ScrollToTop(props){

    //Show the button on scroll
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
    });

    //Handle click event
    const handleClick = () => {
        props.menu.current.scrollIntoView();
    };

    return(
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: "fixed", bottom: 16, right: 16 }}
            >
                {props.children}
            </Box>
        </Fade>
    );
}

export default ScrollToTop;