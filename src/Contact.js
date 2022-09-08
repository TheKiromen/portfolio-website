import {Container} from "@mui/material";
import * as React from 'react';

const Contact = React.forwardRef((props,ref)=>{
    return(
        <Container
            ref={ref}
            sx={{
                mt:200,
                width: 300,
                height: 300,
                backgroundColor: '#ff4f2f',
                '&:hover': {
                    backgroundColor: 'secondary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        />
    );
});



export default Contact;