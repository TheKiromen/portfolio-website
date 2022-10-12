import {Box} from "@mui/material";

function TechnologyLogo(props){
    return(
        //TODO insert logo link as prop,set maxWidth instead of width for non-square images?
        <Box
            sx={{
                width: {xs:"50px", md:"70px", lg:"100px"},
                height: {xs:"50px", md:"70px", lg:"100px"},
                backgroundColor:"#0f0",
                m:1,
            }}
        />
    )
}

export default TechnologyLogo;