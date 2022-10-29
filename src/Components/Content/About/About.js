import * as React from 'react';
import {Container} from "@mui/material";
import Technologies from "./Technologies";
import Separator from "../Separator";
import Information from "./Information";

const About = React.forwardRef((props,ref)=>{
    return(
        <Container
            ref={ref}
            maxWidth={false}
            disableGutters
            sx={{
                backgroundColor: "transparent",
                pt:2,
                pb:5,
            }}
        >
            <Separator label={"ABOUT ME"}/>
            <Information/>
            <Separator label={"TECHNOLOGIES"}/>
            <Technologies/>
        </Container>
    );
})

export default About;