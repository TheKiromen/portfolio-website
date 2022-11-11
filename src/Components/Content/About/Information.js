import {Box} from "@mui/material";
import informationImg from "../../../Assets/Images/informationImg.png";

function Information(){
    return(
        <center>
            <Box
                component="img"
                src={informationImg}
                width={{
                    xs:"90%",
                    sm:"80%",
                    md:"70%",
                    lg:"60%",
                    xl:"50%",
                }}
                mb={3}
            />
        </center>
    );
}

export default Information;