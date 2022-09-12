import * as React from 'react';
import {Divider, Paper, Stack, Typography} from "@mui/material";
import {COLORS} from "../../Assets/Constants";

class Item extends React.Component{
    render() {
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
                onClick={()=>{
                    if(this.props.url!=undefined){
                        window.open(this.props.url,"_blank").focus();
                    }
                    if(this.props.mail!=undefined){
                        window.location.href=this.props.mail;
                    }
                }}
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                    '&:hover': {
                        cursor:'pointer',
                        color:'#00f4ff',
                        //color: COLORS.detail,
                        opacity: 1,
                        transition: '0.15s',
                    },
                }}
            >
                {this.props.children[0]}
                <Typography
                    sx={{
                        fontFamily: 'monospace',
                        fontSize: {
                            xs:18,
                            sm:25,
                        },
                        fontWeight:'bold',
                    }}>
                    {this.props.children[1]}
                </Typography>
            </Stack>
        </Paper>
    }
}

export default Item;