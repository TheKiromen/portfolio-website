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
            <Box
                component="img"
                src={props.image}
                sx={{
                    width: {xs:"50px", md:"70px", lg:"100px"},
                    height: {xs:"50px", md:"70px", lg:"100px"},
                    m:1,
                }}
            />
        </Tooltip>
    )
}

export default TechnologyLogo;