import {Container, Grid, Typography} from "@mui/material";
import * as React from "react";
import Project from "./Project";
import Separator from "../Separator";
import {COLORS} from "../../../Assets/Constants";
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
import pathify2 from '../../../Assets/Images/Pathify/Image1.png'
import pathify3 from '../../../Assets/Images/Pathify/Image1Result.png'
import pathify4 from '../../../Assets/Images/Pathify/Image2.png'
import pathify5 from '../../../Assets/Images/Pathify/Image2Result.png'
import pathify6 from '../../../Assets/Images/Pathify/Image3.png'
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
            <Typography variant="h5" sx={{textAlign:"center", margin:"auto", mb:2, color:COLORS.text, p:2, maxWidth:"80%"}}>
                Here is a brief showcase of some of my projects. If you want to learn more about them, or check out other ones visit my&nbsp;
                <a id={"projects_desc_link"} href={"https://github.com/TheKiromen"}
                   target={"_blank"} rel="noreferrer">
                    <b>GitHub</b>
                </a> page.
            </Typography>
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
                <Project images={images[0]} url={"https://github.com/TheKiromen/GroupChat"}>
                    <span>Group Chat</span>
                    <span>
                        <p>Application for chatting written in Java using Java Swing and multithreading. Consists of two programs, client and server.</p>
                        <p>Users can pick username and connect to the server. When connected they can chat with each other in global chat, or create their own chatroom.</p>
                        <p>Server application creates separate threads for each user. It also displays logs in the main window.</p>
                    </span>
                </Project>
                <Project images={images[1]} url={"https://github.com/TheKiromen/MoviesManager"}>
                    <span>Movies Manager</span>
                    <span>
                        <p>CRUD application made in Java. Backend was written using Spring and Hibernate. Frontend was made with Thymeleaf using Bootstrap components.</p>
                        <p>For this project data was stored on local MySQL database instance, but it can be easily configured with cloud instance.</p>
                        <p>Users can browse movies and add reviews to them. To add and manage movies account needs to have ADMIN permissions in the database.</p>
                    </span>
                </Project>
                <Project images={images[2]} url={"https://github.com/TheKiromen/Pathify"}>
                    <span>Pathify</span>
                    <span>
                        <p>TODO</p>
                    </span>
                </Project>
                <Project images={images[3]} url={"https://github.com/TheKiromen/Image-to-ASCII-Converter"}>
                    <span>Image to ASCII converter</span>
                    <span>
                        <p>TODO</p>
                    </span>
                </Project>
            </Grid>
        </Container>
    );
});


export default Projects;