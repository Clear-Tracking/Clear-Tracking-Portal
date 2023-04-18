import * as React from 'react';
import { useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from '../../Components/UserApplicationList';
import MobileDrawer from '../../Components/MobileDrawer';
import { Outlet } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import MuiLink from '@mui/material/Link';

import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/globalSlice';
import { useDispatch, useSelector } from 'react-redux';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <MuiLink color="inherit" href="https://mui.com/">
                Clear Tracking
            </MuiLink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    })
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function UserApplication() {

    const navigate = useNavigate();
    // Redux state
    const dispatch = useDispatch();
    const globalState = useSelector((state) => state.global);


    const userName = JSON.parse(localStorage.getItem('profile'))?.username;
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const [anchorProfileMenu, setAnchorProfileMenu] = React.useState(null);
    const openProfileMenu = Boolean(anchorProfileMenu);
    const handleClick = (event) => {
        setAnchorProfileMenu(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorProfileMenu(null);
    };

    const handleLogout = () => {
        setAnchorProfileMenu(null);
        dispatch(logout());
    }

    // When user is loggout, redirect to login page
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('profile'));
        if (!user) {
            navigate('/', { replace: true });
        }
    }, [globalState.requestStatus]);

    const menuId = 'primary-search-account-menu';
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open} sx={{ backgroundColor: "skyblue" }}>
                    <Toolbar
                        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    >
                        <IconButton
                            edge="start"
                            color="black"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',

                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="black"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Hi {userName}
                        </Typography>
                        {/* <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton> */}
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleClick}
                            color="black"
                        >
                            <AccountCircle />

                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorProfileMenu}
                            open={openProfileMenu}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <Link to="/userdashboard/profile" style={{ textDecoration: "none", color: "black" }}>
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                            </Link>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>

                        </Menu>
                    </Toolbar>
                </AppBar>
                {
                    window.innerWidth > 800 ? (
                        <Drawer variant="permanent" open={open}>
                            <Toolbar
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    px: [1],

                                }}
                            >
                                <IconButton onClick={toggleDrawer}>
                                    <ChevronLeftIcon />
                                </IconButton>
                            </Toolbar>
                            <Divider />
                            <List component="nav">
                                {mainListItems}
                            </List>
                        </Drawer>) : (
                        <MobileDrawer open={open} />
                    )
                }

                <Box
                    component="main"
                    sx={{
                        backgroundColor: "white",
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Box sx={{ minHeight: "84vh", padding: 2 }} >
                        <Outlet />
                    </Box>

                    <Copyright sx={{ pt: 4 }} />

                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function UserApplicationDashBoard() {
    return <UserApplication />;
}
