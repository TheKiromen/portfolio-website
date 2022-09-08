import * as React from "react";
import {COLORS} from "./Constants.js"
import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


function Navbar(props){
    //Buttons
    const buttons = ['About', 'Projects', 'Contact'];
    //Menu animations
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    //Navbar JSX code
    return(
        <AppBar position="static" sx={{backgroundColor:COLORS.primary}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*Logo for large devices*/}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontSize:25,
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            letterSpacing: '.3rem',
                            color: COLORS.detail,
                            textDecoration: 'none',
                        }}
                    >
                        DOMINIK KRUCZEK
                    </Typography>

                    {/*Buttons for large devices*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'right' }}>
                        {/*Create buttons based on labels*/}
                        {buttons.map((button) => (
                            <Button
                                key={button}
                                onClick={()=>{
                                    handleCloseNavMenu();
                                    props.refs[button].current.scrollIntoView();
                                }}
                                sx={{ my: 2, mr:2, color: COLORS.text, display: 'block', fontFamily: 'monospace', fontSize:18, fontWeight:'bold'}}
                            >
                                {button}
                            </Button>
                        ))}
                    </Box>

                    {/*Logo for small devices*/}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            letterSpacing: '.3rem',
                            color: COLORS.detail,
                            textDecoration: 'none',
                        }}
                    >
                        DOMINIK KRUCZEK
                    </Typography>

                    {/*Menu for small devices*/}
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none'}}}>
                        {/*Menu icon*/}
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon fontSize={"large"}/>
                        </IconButton>

                        {/*Dropdown list*/}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {/*Create list elements based on labels*/}
                            {buttons.map((button) => (
                                <MenuItem
                                    key={button}
                                    onClick={()=>{
                                        handleCloseNavMenu();
                                        //A little hacky but for some reason scrollIntoView would not scroll the main page no matter what.
                                        window.scroll(0,props.refs[button].current.getBoundingClientRect().y);
                                    }}
                                >
                                    <Typography
                                        textAlign="center"
                                        sx={{
                                            color: COLORS.text,
                                            fontFamily: 'monospace',
                                            fontSize:17,
                                            fontWeight:'bold'
                                        }}
                                    >
                                        {button}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;