import React, {useRef} from 'react'
import {Box} from "@mui/material";

function About(){
    return(
        <Box
            sx={{
                mt:200,
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        />
    );
}

export default About;