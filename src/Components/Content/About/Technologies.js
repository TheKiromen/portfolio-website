import {Box, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import TechnologyLogo from "./TechnologyLogo";
import {COLORS} from "../../../Assets/Constants";

function Technologies(){
    return(
        <Container>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Divider sx={{
                    width:"100%",
                    maxWidth:"1200px",
                    m:2,
                    "&::before, &::after":{
                        borderColor:COLORS.detail,
                        borderWidth:{xs:2, md:3},
                    }
                }}>
                    <Typography
                        sx={{
                            color:COLORS.text,
                            fontWeight:"bold",
                            fontFamily:"monospace",
                            fontSize:{
                                xs:25,
                                sm:30,
                                md:35,
                            }
                        }}
                    >
                        TECHNOLOGIES
                    </Typography>
                </Divider>
            </Box>
            {/*TODO Add images as props, add labels with technology name*/}
            {/*Java, Spring, Hibernate, SQL, Mongo, Git, JS, HTML, CSS*/}
            <Grid container direction={"row"} alignItems={"center"} justifyContent={"center"}>
                <TechnologyLogo/>
                <TechnologyLogo/>
                <TechnologyLogo/>
                <TechnologyLogo/>
                <TechnologyLogo/>
                <TechnologyLogo/>
                <TechnologyLogo/>
                <TechnologyLogo/>
                <TechnologyLogo/>
            </Grid>
        </Container>


    )
}

export default Technologies;