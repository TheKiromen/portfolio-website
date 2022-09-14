import * as React from 'react';
import {Divider, Paper, Stack, Typography} from "@mui/material";
import {COLORS} from "../../Assets/Constants";

function Item(props){
        //Handle clicking the link
        const handleClickEvent= ()=>{
            if(props.url!==undefined){
                window.open(this.props.url,"_blank").focus();
            }
            if(props.mail!==undefined){
                window.location.href=this.props.mail;
            }
        };


        return <Paper
            elevation={0}
            sx={{
                background: COLORS.primary,
                color:COLORS.text,
                padding: 1,
            }}>
            <Divider variant="middle" sx={{
                backgroundColor:COLORS.detail,
                borderBottomWidth:2,
                display:{
                    xs:'none',
                    md:'flex',
                },
                mb:2,
            }}/>
            <Stack
                width={{md:"250px", lg:"310px",}}
                onClick={handleClickEvent}
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                    '&:hover': {
                        cursor:'pointer',
                        color:'#00f4ff',
                        opacity: 1,
                        transition: '0.2s',
                    },
                }}
            >
            {props.children[0]}
            <Typography
                sx={{
                    fontFamily: 'monospace',
                    fontSize: {
                        xs:18,
                        sm:25,
                        md:20,
                        lg:25,
                    },
                    fontWeight:'bold',
                }}>
                {props.children[1]}
            </Typography>
        </Stack>
    </Paper>
}

export default Item;