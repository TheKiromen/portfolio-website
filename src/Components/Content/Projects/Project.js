import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia, Container,
    Dialog, DialogContent,
    Grid, Stack,
    Typography
} from "@mui/material";
import * as React from 'react';
import {COLORS} from "../../../Assets/Constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import Carousel from 'react-material-ui-carousel'

function Project(props){

    //Dialog display variables
    const [open, setOpen] = React.useState(false);

    //Opening and closing dialog
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
                <DialogContent sx={{padding:2,paddingBottom:0}}>
                    <Carousel
                        autoPlay={false}
                        animation={"slide"}
                        sx={{pb:2}}
                        navButtonsProps={{
                            style: {
                                backgroundColor:COLORS.primary,
                                color:COLORS.detail,
                            }
                        }}
                        indicatorContainerProps={{style:{marginTop:1}}}
                        indicatorIconButtonProps={{style:{color:COLORS.primary}}}
                        activeIndicatorIconButtonProps={{style:{color:COLORS.detail}}}
                    >
                        {
                            //Map each url to and image container
                            props.images.map((img)=>
                                <center>
                                <Box
                                    component="img"
                                    alt="Image failed to load"
                                    sx={{
                                        height:"auto",
                                        width: "100%",
                                    }}
                                    src={img}
                                />
                                </center>
                            )
                        }
                    </Carousel>
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
                        height="300"
                        image={props.images[0]}
                        alt="Image failed to load"
                    />
                </CardActionArea>
                <CardContent sx={{color: COLORS.text, pb:1}}>
                    <Typography gutterBottom variant="h5" sx={{ fontWeight:"bold"}}>
                        {props.children[0]}
                    </Typography>
                    <Typography variant="body2" textAlign={'center'} sx={{pr:2, pl:2}}>
                        {props.children[1]}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Container maxWidth={false} sx={{width:"auto"}}>
                        <Stack
                            onClick={handleClickEvent}
                            direction={"row"}
                            spacing={1}
                            alignItems={"center"}
                            justifyContent={"center"}
                            color={COLORS.detail}
                            sx={{
                                pb:1,
                                pt:1,
                                pr:2,
                                pl:2,
                                mb:1,
                                '&:hover': {
                                    cursor:'pointer',
                                    color:COLORS.highlight,
                                    opacity: 1,
                                    transition: '0.2s',
                                },
                            }}
                        >
                            <GitHubIcon fontSize={"large"}/>
                            <Typography variant="button" sx={{fontWeight:"bold", fontFamily:"monospace", fontSize:25}}>
                                GitHub
                            </Typography>
                        </Stack>
                    </Container>
                </CardActions>
            </Card>
            </center>
        </Grid>
    )
}

export default Project;