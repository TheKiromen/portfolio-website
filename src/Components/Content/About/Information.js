import {Box} from "@mui/material";
import informationImg from "../../../Assets/Images/informationImg.png";

function Information(){
    return(
        <center>
            <Box
                component="img"
                src={informationImg}
                width={"50%"} //TODO change width depending on viewport breakpoint
                mb={3}
            />
        </center>
    );
}

export default Information;