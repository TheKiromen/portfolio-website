import * as React from 'react';
import {Container} from "@mui/material";
import {COLORS} from "../../../Assets/Constants";
import Technologies from "./Technologies";

const About = React.forwardRef((props,ref)=>{
    return(
        <Container
            ref={ref}
            maxWidth={false}
            sx={{
                backgroundColor: COLORS.secondary,
                pt:2,
                pb:5,
            }}
        >
            <Technologies/>
        </Container>
    );
})

export default About;