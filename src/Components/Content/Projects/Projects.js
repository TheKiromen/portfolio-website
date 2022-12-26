import {Container, Grid} from "@mui/material";
import * as React from "react";
import Project from "./Project";
import Separator from "../Separator";
//-----------------Image imports
//Group Chat
import groupChatImg1 from '../../../Assets/Images/GroupChat/ServerLog.png'
import groupChatImg2 from '../../../Assets/Images/GroupChat/UserConnect.png'
import groupChatImg3 from '../../../Assets/Images/GroupChat/ChatroomCreation.png'
import groupChatImg4 from '../../../Assets/Images/GroupChat/ServerShutdown.png'
//Movies Manager
import moviesManager1 from '../../../Assets/Images/MoviesManager/Login.png'
import moviesManager2 from '../../../Assets/Images/MoviesManager/MainPage.png'
import moviesManager3 from '../../../Assets/Images/MoviesManager/Details.png'
import moviesManager4 from '../../../Assets/Images/MoviesManager/Review.png'
import moviesManager5 from '../../../Assets/Images/MoviesManager/Admin.png'
import moviesManager6 from '../../../Assets/Images/MoviesManager/Edit.png'
//Pathify
import pathify1 from '../../../Assets/Images/Pathify/App.png'
import pathify2 from '../../../Assets/Images/Pathify/Image1.jpg'
import pathify3 from '../../../Assets/Images/Pathify/Image1Result.png'
import pathify4 from '../../../Assets/Images/Pathify/Image2.jpg'
import pathify5 from '../../../Assets/Images/Pathify/Image2Result.png'
import pathify6 from '../../../Assets/Images/Pathify/Image3.jpg'
import pathify7 from '../../../Assets/Images/Pathify/Image3Result.png'
//ImageToASCII
import imgToASCII1 from '../../../Assets/Images/ImagteToASCII/app1.png'
import imgToASCII2 from '../../../Assets/Images/ImagteToASCII/app2.png'
import imgToASCII3 from '../../../Assets/Images/ImagteToASCII/image1.png'
import imgToASCII4 from '../../../Assets/Images/ImagteToASCII/image1result.png'
import imgToASCII5 from '../../../Assets/Images/ImagteToASCII/image2.png'
import imgToASCII6 from '../../../Assets/Images/ImagteToASCII/image2result.png'

const Projects = React.forwardRef((props,ref)=>{

    const images=[
        [groupChatImg1, groupChatImg2, groupChatImg3, groupChatImg4],
        [moviesManager1, moviesManager2, moviesManager3, moviesManager4, moviesManager5, moviesManager6],
        [pathify1, pathify2, pathify3, pathify4, pathify5, pathify6, pathify7],
        [imgToASCII1, imgToASCII2, imgToASCII3, imgToASCII4, imgToASCII5, imgToASCII6]
    ]

    return(
        <Container disableGutters maxWidth={false}>
            <Separator label={"PROJECTS"}/>
            <Grid
                ref={ref}
                container
                spacing={3}
                padding={2}
                pb={{
                    lg:7,
                    xs:5,
                }}
                direction={"row"}
                sx={{
                    backgroundColor: "transparent",
                }}
            >
                {/*TODO finish the projects descriptions*/}
                <Project images={images[0]} url={"https://github.com/TheKiromen/GroupChat"}>
                    <span>Group Chat</span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero odio, pretium nec metus quis, gravida gravida neque.
                        Morbi aliquet quam id augue sollicitudin, nec rhoncus neque iaculis. Aliquam in turpis vitae nulla commodo lobortis congue vel felis.
                        Quisque aliquam dapibus nibh, sed elementum tellus efficitur et. Vestibulum rutrum dictum consectetur. Integer fermentum erat sed aliquet faucibus.
                        Integer efficitur lacinia varius. Integer mauris nunc, sollicitudin vitae porta sed, tincidunt in ipsum. Curabitur mattis placerat ligula.
                        Donec vitae mauris quam.
                    </span>
                </Project>
                <Project images={images[1]} url={"https://github.com/TheKiromen/MoviesManager"}>
                    <span>Movies Manager</span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero odio, pretium nec metus quis, gravida gravida neque.
                        Morbi aliquet quam id augue sollicitudin, nec rhoncus neque iaculis. Aliquam in turpis vitae nulla commodo lobortis congue vel felis.
                        Quisque aliquam dapibus nibh, sed elementum tellus efficitur et. Vestibulum rutrum dictum consectetur. Integer fermentum erat sed aliquet faucibus.
                        Integer efficitur lacinia varius. Integer mauris nunc, sollicitudin vitae porta sed, tincidunt in ipsum. Curabitur mattis placerat ligula.
                        Donec vitae mauris quam.
                    </span>
                </Project>
                <Project images={images[2]} url={"https://github.com/TheKiromen/Pathify"}>
                    <span>Pathify</span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero odio, pretium nec metus quis, gravida gravida neque.
                        Morbi aliquet quam id augue sollicitudin, nec rhoncus neque iaculis. Aliquam in turpis vitae nulla commodo lobortis congue vel felis.
                        Quisque aliquam dapibus nibh, sed elementum tellus efficitur et. Vestibulum rutrum dictum consectetur. Integer fermentum erat sed aliquet faucibus.
                        Integer efficitur lacinia varius. Integer mauris nunc, sollicitudin vitae porta sed, tincidunt in ipsum. Curabitur mattis placerat ligula.
                        Donec vitae mauris quam.
                    </span>
                </Project>
                <Project images={images[3]} url={"https://github.com/TheKiromen/Image-to-ASCII-Converter"}>
                    <span>Image to ASCII converter</span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero odio, pretium nec metus quis, gravida gravida neque.
                        Morbi aliquet quam id augue sollicitudin, nec rhoncus neque iaculis. Aliquam in turpis vitae nulla commodo lobortis congue vel felis.
                        Quisque aliquam dapibus nibh, sed elementum tellus efficitur et. Vestibulum rutrum dictum consectetur. Integer fermentum erat sed aliquet faucibus.
                        Integer efficitur lacinia varius. Integer mauris nunc, sollicitudin vitae porta sed, tincidunt in ipsum. Curabitur mattis placerat ligula.
                        Donec vitae mauris quam.
                    </span>
                </Project>
            </Grid>
        </Container>
    );
});


export default Projects;