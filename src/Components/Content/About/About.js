import * as React from 'react';
import {Container} from "@mui/material";
import Technologies from "./Technologies";
import Separator from "../Separator";

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
            {/*TODO add description section*/}
            <Separator label={"TECHNOLOGIES"}/>
            <Technologies/>
        </Container>
    );
})

export default About;