import {Container, Grid} from "@mui/material";
import * as React from "react";
import Project from "./Project";
import Separator from "../Separator";

const Projects = React.forwardRef((props,ref)=>{

    //TODO add correct images
    const images=[
        [
            "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        [
            "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
            "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
            "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg",
        ],
        [
            "https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/307279357_632405371581769_4617907306119132376_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VSusXi7HhP8AX8d6UkP&_nc_ht=scontent-waw1-1.xx&oh=00_AT93DiGvl9Ak79phhpjI7-YAtJEo7XBldFL95nD1W_r8_Q&oe=63402F0D",
            "https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/307279357_632405371581769_4617907306119132376_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VSusXi7HhP8AX8d6UkP&_nc_ht=scontent-waw1-1.xx&oh=00_AT93DiGvl9Ak79phhpjI7-YAtJEo7XBldFL95nD1W_r8_Q&oe=63402F0D",
            "https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/307279357_632405371581769_4617907306119132376_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VSusXi7HhP8AX8d6UkP&_nc_ht=scontent-waw1-1.xx&oh=00_AT93DiGvl9Ak79phhpjI7-YAtJEo7XBldFL95nD1W_r8_Q&oe=63402F0D",
            "https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/307279357_632405371581769_4617907306119132376_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VSusXi7HhP8AX8d6UkP&_nc_ht=scontent-waw1-1.xx&oh=00_AT93DiGvl9Ak79phhpjI7-YAtJEo7XBldFL95nD1W_r8_Q&oe=63402F0D",
            "https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/307279357_632405371581769_4617907306119132376_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VSusXi7HhP8AX8d6UkP&_nc_ht=scontent-waw1-1.xx&oh=00_AT93DiGvl9Ak79phhpjI7-YAtJEo7XBldFL95nD1W_r8_Q&oe=63402F0D",
        ],
        [
            "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg",
            "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg",
            "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg",
        ]
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
                <Project images={images[0]} url={"https://www.google.com/"}>
                    <span>Project 1</span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero odio, pretium nec metus quis, gravida gravida neque.
                        Morbi aliquet quam id augue sollicitudin, nec rhoncus neque iaculis. Aliquam in turpis vitae nulla commodo lobortis congue vel felis.
                        Quisque aliquam dapibus nibh, sed elementum tellus efficitur et. Vestibulum rutrum dictum consectetur. Integer fermentum erat sed aliquet faucibus.
                        Integer efficitur lacinia varius. Integer mauris nunc, sollicitudin vitae porta sed, tincidunt in ipsum. Curabitur mattis placerat ligula.
                        Donec vitae mauris quam.
                    </span>
                </Project>
                <Project images={images[1]} url={"https://www.google.com/"}>
                    <span>Project 2</span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero odio, pretium nec metus quis, gravida gravida neque.
                        Morbi aliquet quam id augue sollicitudin, nec rhoncus neque iaculis. Aliquam in turpis vitae nulla commodo lobortis congue vel felis.
                        Quisque aliquam dapibus nibh, sed elementum tellus efficitur et. Vestibulum rutrum dictum consectetur. Integer fermentum erat sed aliquet faucibus.
                        Integer efficitur lacinia varius. Integer mauris nunc, sollicitudin vitae porta sed, tincidunt in ipsum. Curabitur mattis placerat ligula.
                        Donec vitae mauris quam.
                    </span>
                </Project>
                <Project images={images[2]} url={"https://www.google.com/"}>
                    <span>Project 3</span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero odio, pretium nec metus quis, gravida gravida neque.
                        Morbi aliquet quam id augue sollicitudin, nec rhoncus neque iaculis. Aliquam in turpis vitae nulla commodo lobortis congue vel felis.
                        Quisque aliquam dapibus nibh, sed elementum tellus efficitur et. Vestibulum rutrum dictum consectetur. Integer fermentum erat sed aliquet faucibus.
                        Integer efficitur lacinia varius. Integer mauris nunc, sollicitudin vitae porta sed, tincidunt in ipsum. Curabitur mattis placerat ligula.
                        Donec vitae mauris quam.
                    </span>
                </Project>
                <Project images={images[3]} url={"https://www.google.com/"}>
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
        </Container>
    );
});


export default Projects;