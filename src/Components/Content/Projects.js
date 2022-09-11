import {Container} from "@mui/material";
import * as React from "react";
import {COLORS} from "../../Assets/Constants";

const Projects = React.forwardRef((props,ref)=>{
    return(
        <Container
            ref={ref}
            maxWidth={false}
            sx={{
                backgroundColor: COLORS.secondary,
                height: 300,
            }}
        >

        </Container>
    );
});


export default Projects;