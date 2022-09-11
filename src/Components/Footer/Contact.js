import {Container, Stack, Typography} from "@mui/material";
import * as React from 'react';
import {COLORS} from '../../Assets/Constants.js'
import Item from "./Item";


const Contact = React.forwardRef((props,ref)=>{
    return(
        <Container
            ref={ref}
            maxWidth={false}
            sx={{
                backgroundColor: COLORS.primary,
                height: 300,
            }}
        >
            <Typography
                sx={{
                    color: COLORS.text,
                    fontFamily: 'monospace',
                    //TODO pick font sizes
                    fontSize: {
                        xs:15,
                        md:25,
                    },
                    fontWeight:'bold',
                    textAlign:'center',
                    padding:2,
                }}>
                CONTACT
            </Typography>
            <Stack
                //TODO pick dimensions for transform, same as buttons in navbar?
                direction={{
                    xs:'column',
                    md:'row',
                }}
                justifyContent={'center'}
                alignItems={'center'}
                spacing={2}
            >
                {/*TODO finish up links by inserting icons and link*/}
                <Item>Link 1</Item>
                <Item>Link 2</Item>
                <Item>Link 3</Item>
            </Stack>
        </Container>
    );
});



export default Contact;