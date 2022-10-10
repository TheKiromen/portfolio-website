import {Box, Divider, Typography} from "@mui/material";

function Technologies(){
    return(
        <Box display="flex" justifyContent="center" alignItems="center">
            {/*TODO Style the divider and typography*/}
            <Divider sx={{
                width:"100%",
                maxWidth:"700px",
                m:2,
            }}>
                <Typography>TECHNOLOGIES</Typography>
            </Divider>
            {/*TODO List of used and known technologies as images with labels*/}
            {/*Java, Spring, Hibernate, SQL, Mongo, Git, JS, HTML, CSS*/}
        </Box>
    )
}

export default Technologies;