import {Grid} from "@mui/material";
import * as React from "react";
import {COLORS} from "../../Assets/Constants";
import Project from "./Project";

const Projects = React.forwardRef((props,ref)=>{
    return(
        <Grid
            ref={ref}
            container
            spacing={3}
            padding={2}
            pb={5}
            direction={"row"}
            sx={{
                //TODO change the background back to secondary
                backgroundColor: COLORS.detail,
            }}
        >
            {/*TODO send icon and link to repo/live version in children, send array of images for stepper?*/}
            <Project img={"https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}>
                <span>Project 1</span>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero odio, pretium nec metus quis, gravida gravida neque.
                    Morbi aliquet quam id augue sollicitudin, nec rhoncus neque iaculis. Aliquam in turpis vitae nulla commodo lobortis congue vel felis.
                    Quisque aliquam dapibus nibh, sed elementum tellus efficitur et. Vestibulum rutrum dictum consectetur. Integer fermentum erat sed aliquet faucibus.
                    Integer efficitur lacinia varius. Integer mauris nunc, sollicitudin vitae porta sed, tincidunt in ipsum. Curabitur mattis placerat ligula.
                    Donec vitae mauris quam.
                </span>
            </Project>
            <Project img={"https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}>
                <span>Project 2</span>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero odio, pretium nec metus quis, gravida gravida neque.
                    Morbi aliquet quam id augue sollicitudin, nec rhoncus neque iaculis. Aliquam in turpis vitae nulla commodo lobortis congue vel felis.
                    Quisque aliquam dapibus nibh, sed elementum tellus efficitur et. Vestibulum rutrum dictum consectetur. Integer fermentum erat sed aliquet faucibus.
                    Integer efficitur lacinia varius. Integer mauris nunc, sollicitudin vitae porta sed, tincidunt in ipsum. Curabitur mattis placerat ligula.
                    Donec vitae mauris quam.
                </span>
            </Project>
            <Project img={"https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}>
                <span>Project 3</span>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero odio, pretium nec metus quis, gravida gravida neque.
                    Morbi aliquet quam id augue sollicitudin, nec rhoncus neque iaculis. Aliquam in turpis vitae nulla commodo lobortis congue vel felis.
                    Quisque aliquam dapibus nibh, sed elementum tellus efficitur et. Vestibulum rutrum dictum consectetur. Integer fermentum erat sed aliquet faucibus.
                    Integer efficitur lacinia varius. Integer mauris nunc, sollicitudin vitae porta sed, tincidunt in ipsum. Curabitur mattis placerat ligula.
                    Donec vitae mauris quam.
                </span>
            </Project>
            <Project img={"https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}>
                <span>Project 4</span>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero odio, pretium nec metus quis, gravida gravida neque.
                    Morbi aliquet quam id augue sollicitudin, nec rhoncus neque iaculis. Aliquam in turpis vitae nulla commodo lobortis congue vel felis.
                    Quisque aliquam dapibus nibh, sed elementum tellus efficitur et. Vestibulum rutrum dictum consectetur. Integer fermentum erat sed aliquet faucibus.
                    Integer efficitur lacinia varius. Integer mauris nunc, sollicitudin vitae porta sed, tincidunt in ipsum. Curabitur mattis placerat ligula.
                    Donec vitae mauris quam.
                </span>
            </Project>

        </Grid>
    );
});


export default Projects;