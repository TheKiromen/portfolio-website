import {
    Box, Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia, Container,
    Dialog, DialogContent,
    DialogTitle,
    Grid, MobileStepper, Stack,
    Typography
} from "@mui/material";
import * as React from 'react';
import {COLORS} from "../../Assets/Constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import Carousel from 'react-material-ui-carousel'

function Project(props){

    //Dialog display variables
    const [activeStep, setActiveStep] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const maxSteps=props.images.length;

    //Handling stepper events
    const handleNext = () => {
        if(activeStep+1===maxSteps){
            setActiveStep((prevActiveStep)=>prevActiveStep=0);
        }else{
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if(activeStep-1<0){
            setActiveStep((prevActiveStep)=> prevActiveStep=maxSteps-1);
        }else{
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

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
                                <Box
                                    component="img"
                                    alt="Image failed to load"
                                    sx={{
                                        height:"auto",
                                        width: "100%",
                                    }}
                                    src={img}
                                />
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
                        height="200"
                        image={props.images[0]}
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
                                    color:COLORS.highlight,
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