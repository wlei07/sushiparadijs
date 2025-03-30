import {AppBar, Box, Button, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <AppBar position="sticky" color="primary">
            <Toolbar>
                <Box component="img" src="/logo.png" sx={{height: 60, marginRight: 2}}/>
                <Box sx={{ flexGrow: 1 }} />
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/menu">Menu</Button>
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Toolbar>
        </AppBar>
    );
}
