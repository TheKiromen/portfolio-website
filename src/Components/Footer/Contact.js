import {Container, Divider, Stack, Typography} from "@mui/material";
import * as React from 'react';
import {COLORS} from '../../Assets/Constants.js'
import Item from "./Item";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contact = React.forwardRef((props,ref)=>{
    return(
        <Container
            ref={ref}
            maxWidth={false}
            sx={{
                backgroundColor: COLORS.primary,
                padding:2,
            }}
        >
            <Typography
                sx={{
                    color: COLORS.text,
                    fontFamily: 'monospace',
                    fontSize: {
                        xs:20,
                        sm:25,
                    },
                    fontWeight:'bold',
                    textAlign:'center',
                }}>
                CONTACT
            </Typography>
            <Divider variant="middle" sx={{
                backgroundColor:COLORS.detail,
                borderBottomWidth:2,
                display:{
                    xs:'flex',
                    md:'none',
                },
                mb:2,
            }}/>
            <Stack
                direction={{
                    xs:'column',
                    md:'row',
                }}
                justifyContent={'center'}
                alignItems={'center'}
                spacing={3}
            >
                <Item url={"https://github.com/TheKiromen"}>
                    <GitHubIcon fontSize={"large"}/>
                    GitHub Profile
                </Item>
                <Item mail={"mailto:dkrucze@gmail.com"}>
                    <AlternateEmailIcon fontSize={"large"}/>
                    dkrucze@gmail.com
                </Item>
                <Item url={"https://www.linkedin.com/in/dkrucze/"}>
                    <LinkedInIcon fontSize={"large"}/>
                    LinkedIn Profile
                </Item>
            </Stack>
        </Container>
    );
});



export default Contact;