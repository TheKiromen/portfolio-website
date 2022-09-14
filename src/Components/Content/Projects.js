import {Grid} from "@mui/material";
import * as React from "react";
import {COLORS} from "../../Assets/Constants";
import Project from "./Project";

const Projects = React.forwardRef((props,ref)=>{
    return(
        <Grid
            ref={ref}
            container
            spacing={3}
            padding={2}
            pb={5}
            direction={"row"}
            sx={{
                //TODO change the background back to secondary
                backgroundColor: COLORS.detail,
            }}
        >
            {/*TODO send image media via props, and add children components*/}
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </Grid>
    );
});


export default Projects;