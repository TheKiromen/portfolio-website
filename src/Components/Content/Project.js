import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia, Container,
    Dialog, DialogContent,
    DialogTitle,
    Grid, Stack,
    Typography
} from "@mui/material";
import * as React from 'react';
import {COLORS} from "../../Assets/Constants";
import GitHubIcon from "@mui/icons-material/GitHub";

function Project(props){

    //Dialog display variables
    const [open, setOpen] = React.useState(false);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //Handle link click
    const handleClickEvent= ()=>{
        if(props.url!==undefined){
            window.open(props.url,"_blank").focus();
        }
    };

    return(
        <Grid item xs={12} sm={6} lg={3}>
            {/*Dialog with zoomed in image*/}
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={"md"}
                fullWidth={true}
                PaperProps={{
                    style: {
                        backgroundColor: COLORS.secondary,
                        color:COLORS.text,
                    }
                }}
            >
                {/*TODO Make same font as in card*/}
                <DialogTitle>{props.children[0]}</DialogTitle>
                <DialogContent sx={{padding:2}}>
                    {/*TODO change this to stepper with many images?*/}
                    <Box
                        component="img"
                        alt="Image failed to load"
                        sx={{
                            height: "auto",
                            width: "100%",
                        }}
                        src={props.img}
                    />
                </DialogContent>
            </Dialog>
            <center>
            <Card
                elevation={8}
                sx={{
                    maxWidth: 400,
                    color:COLORS.text,
                    backgroundColor:COLORS.primary,
            }}>
                <CardActionArea onClick={handleOpen}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={props.img}
                        alt="Image failed to load"
                    />
                </CardActionArea>
                <CardContent>
                    {/*TODO pick fonts and sizes*/}
                    <Typography gutterBottom variant="h5" component="div">
                        {props.children[0]}
                    </Typography>
                    <Typography variant="body2">
                        {props.children[1]}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Container>
                        <Stack
                            onClick={handleClickEvent}
                            direction={"row"}
                            spacing={1}
                            alignItems={"center"}
                            justifyContent={"center"}
                            color={COLORS.detail}
                            sx={{
                                mb:1,
                                '&:hover': {
                                    cursor:'pointer',
                                    color:'#00f4ff',
                                    opacity: 1,
                                    transition: '0.2s',
                                },
                            }}
                        >
                            <GitHubIcon fontSize={"large"}/>
                            <Typography>Code</Typography>
                        </Stack>
                    </Container>
                </CardActions>
            </Card>
            </center>
        </Grid>
    )
}

export default Project;