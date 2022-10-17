import {Box, Tooltip} from "@mui/material";
import {COLORS} from "../../../Assets/Constants";


function TechnologyLogo(props){
    return(
        <Tooltip title={props.label} arrow componentsProps={{
            tooltip:{
                sx:{
                    backgroundColor:COLORS.primary,
                    '& .MuiTooltip-arrow': {
                        color: COLORS.primary,
                    },
                    fontWeight:'bold',
                    fontSize: {
                        xs:"0.8rem",
                        md:"1rem",
                    },
                    padding:1,
                }
            }
        }}>
            {/*TODO insert logo link as prop,set maxWidth instead of width for non-square images?*/}
            <Box
                sx={{
                    width: {xs:"50px", md:"70px", lg:"100px"},
                    height: {xs:"50px", md:"70px", lg:"100px"},
                    backgroundColor:"#0f0",
                    m:1,
                }}
            />
        </Tooltip>
    )
}

export default TechnologyLogo;