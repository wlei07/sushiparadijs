import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    Toolbar,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {Link} from "react-router-dom";
import logo from '../assets/logo.png';
import {useState} from "react";
import {Menu} from "@mui/icons-material";

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const navLinks = [
        {label: "HOME", to: import.meta.env.BASE_URL},
        {label: "MENU", to: `${import.meta.env.BASE_URL}menu`},
        {label: "OVER ONS", to: `${import.meta.env.BASE_URL}over-us`},
        {label: "CONTACT", to: `${import.meta.env.BASE_URL}contact`}
    ];

    return (
        <AppBar position="sticky" color="primary">
            <Toolbar>
                <Link to={import.meta.env.BASE_URL}>
                    <Box
                        component="img"
                        src={logo}
                        alt="Logo"
                        sx={{ height: 60, marginRight: 2, cursor: "pointer" }}
                    />
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                {isMobile ? (
                    <>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={() => setDrawerOpen(true)}
                        >
                            <Menu/>
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={() => setDrawerOpen(false)}
                        >
                            <List sx={{width: 200}}>
                                {navLinks.map(({label, to}) => (
                                    <ListItemButton
                                        key={label}
                                        component={Link}
                                        to={to}
                                        onClick={() => setDrawerOpen(false)}
                                    >
                                        <ListItemText primary={label}/>
                                    </ListItemButton>
                                ))}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    navLinks.map(({label, to}) => (
                        <Button
                            key={label}
                            color="inherit"
                            component={Link}
                            to={to}
                        >
                            {label}
                        </Button>
                    ))
                )}
            </Toolbar>
        </AppBar>
    );
}
