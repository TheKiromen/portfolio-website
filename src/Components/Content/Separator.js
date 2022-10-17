import {Box, Divider, Typography} from "@mui/material";
import {COLORS} from "../../Assets/Constants";

function Separator(props){
    return(
        <Box display="flex" justifyContent="center" alignItems="center" sx={{backgroundColor:COLORS.secondary}}>
            <Divider sx={{
                width:"85%",
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
                    {props.label}
                </Typography>
            </Divider>
        </Box>
    );
}

export default Separator;