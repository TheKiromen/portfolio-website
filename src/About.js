import * as React from 'react';
import {Container} from "@mui/material";

const About = React.forwardRef((props,ref)=>{
    return(
        <Container
            ref={ref}
            sx={{
                mt:200,
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}>
        </Container>

    );
})

export default About;