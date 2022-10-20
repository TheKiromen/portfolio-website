import {Box, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import TechnologyLogo from "./TechnologyLogo";

function Technologies(){
    return(
        <Grid container direction={"row"} alignItems={"center"} justifyContent={"center"} sx={{backgroundColor:"transparent"}}>
            <TechnologyLogo image={""} label={"Java"}/>
            <TechnologyLogo image={""} label={"Spring"}/>
            <TechnologyLogo image={""} label={"Hibernate"}/>
            <TechnologyLogo image={""} label={"Git"}/>
            <TechnologyLogo image={""} label={"MongoDB"}/>
            <TechnologyLogo image={""} label={"SQL"}/>
            <TechnologyLogo image={""} label={"HTML"}/>
            <TechnologyLogo image={""} label={"CSS"}/>
            <TechnologyLogo image={""} label={"JavaScript"}/>
        </Grid>
    )
}

export default Technologies;