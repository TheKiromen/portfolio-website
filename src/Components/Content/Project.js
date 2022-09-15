import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Dialog, DialogContent,
    DialogTitle,
    Grid,
    Typography
} from "@mui/material";
import * as React from 'react';
import {COLORS} from "../../Assets/Constants";

function Project(props){

    //Dialog display variables
    const [open, setOpen] = React.useState(false);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <Grid item xs={12} sm={6} lg={3}>
            {/*Dialog with zoomed in image*/}
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={"md"}
                fullWidth={true}
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
                            width: "100%"
                        }}
                        src={props.img}
                    />
                </DialogContent>
            </Dialog>
            {/*TODO add styling to cards, change font color*/}
            <center>
            <Card sx={{maxWidth: 400, color:COLORS.primary}}>
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
                    {/*TODO Get icon and link from children*/}
                </CardActions>
            </Card>
            </center>
        </Grid>
    )
}

export default Project;