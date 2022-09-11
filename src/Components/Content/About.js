import * as React from 'react';
import {Container} from "@mui/material";
import {COLORS} from "../../Assets/Constants";

const About = React.forwardRef((props,ref)=>{
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
})

export default About;