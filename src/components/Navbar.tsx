import {AppBar, Box, Button, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import logo from '../assets/logo.png';

export default function Navbar() {
    return (
        <AppBar position="sticky" color="primary">
            <Toolbar>
                <Box component="img" src={logo} sx={{height: 60, marginRight: 2}}/>
                <Box sx={{ flexGrow: 1 }} />
                <Button color="inherit" component={Link} to={import.meta.env.BASE_URL}>Home</Button>
                <Button color="inherit" component={Link} to={`${import.meta.env.BASE_URL}menu`}>Menu</Button>
                <Button color="inherit" component={Link} to={`${import.meta.env.BASE_URL}contact`}>Contact</Button>
            </Toolbar>
        </AppBar>
    );
}
