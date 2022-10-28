import {Grid} from "@mui/material";
import TechnologyLogo from "./TechnologyLogo";
import JavaImage from "../../../Assets/Images/Java.png";
import SpringImage from "../../../Assets/Images/Spring.png";
import HibernateImage from "../../../Assets/Images/Hibernate.png";
import GitImage from "../../../Assets/Images/Git.png";
import MongoDBImage from "../../../Assets/Images/MongoDB.png";
import SQLImage from "../../../Assets/Images/SQL.png";
import HTMLImage from "../../../Assets/Images/HTML.png";
import CSSImage from "../../../Assets/Images/CSS.png";
import JavaScriptImage from "../../../Assets/Images/JavaScript.png";


function Technologies(){
    return(
        <Grid container direction={"row"} alignItems={"center"} justifyContent={"center"} sx={{backgroundColor:"transparent"}}>
            <TechnologyLogo image={JavaImage} label={"Java"}/>
            <TechnologyLogo image={SpringImage} label={"Spring"}/>
            <TechnologyLogo image={HibernateImage} label={"Hibernate"}/>
            <TechnologyLogo image={GitImage} label={"Git"}/>
            <TechnologyLogo image={MongoDBImage} label={"MongoDB"}/>
            <TechnologyLogo image={SQLImage} label={"SQL"}/>
            <TechnologyLogo image={HTMLImage} label={"HTML"}/>
            <TechnologyLogo image={CSSImage} label={"CSS"}/>
            <TechnologyLogo image={JavaScriptImage} label={"JavaScript"}/>
        </Grid>
    )
}

export default Technologies;