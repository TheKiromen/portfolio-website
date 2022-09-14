import {Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

function Project(props){

    const handleImageClick = ()=>{
        //TODO Show full image in modal window
        console.log("image clicked")
    };

    return(
        <Grid item xs={12} sm={6} lg={3}>
            <center>
            {/*TODO find a better way to center each card in grid cell? add styling to cards*/}
            <Card sx={{maxWidth: 400}}>
                <CardActionArea onClick={handleImageClick}>
                    <CardMedia
                        component="img"
                        height="200"
                        //TODO get image url from props
                        image="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="green iguana"
                    />
                </CardActionArea>
                <CardContent>
                    {/*TODO pick fonts and sizes, get title and content from children?*/}
                    <Typography gutterBottom variant="h5" component="div">
                        Lorem Ipsum
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse sed neque felis. Nunc facilisis ultrices tellus a scelerisque.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </Typography>
                </CardContent>
                <CardActions>
                    {/*TODO ADD ICON FOR REPO LINK?, get repo link from props*/}
                </CardActions>
            </Card>
            </center>
        </Grid>
    )
}

export default Project;