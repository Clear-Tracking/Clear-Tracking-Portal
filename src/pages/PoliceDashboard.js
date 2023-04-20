import * as React from 'react';
import { useEffect } from 'react';
import { styled, createTheme, ThemeProvider,alpha} from '@mui/material/styles';
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
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MainListItems } from '../Components/ListItems';
import { Outlet } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

// Redux Actions
import {logout} from '../store/globalSlice';
import { resetRequestStatus } from '../store/policeDashboardSlice';

// constants
import { REQUEST_STATUS_FAILED, REQUEST_STATUS_SUCCEEDED,REQUEST_STATUS_LOADING } from '../constants/Constants';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  left: '100px',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  border: '1px solid  #81D0DF',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '500px',
    borderRadius: '30px'
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:'#388ab0'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


function Copyright(props) {
 

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Clear Tracking
      </Link>{' '}
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

function PoliceDashboard() {

  const navigate = useNavigate();
  // Redux state
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.global);
  const policeDashboardState = useSelector((state) => state.policeDashboard);
  const stationName = JSON.parse(localStorage.getItem('profile'))?.username;

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
  };

  // toaster for Login state
  useEffect(() => {

    // In case of success
    if (policeDashboardState.requestStatus === REQUEST_STATUS_SUCCEEDED) {
      toast.success(policeDashboardState.message, {
        position: "bottom-right",
        hideProgressBar: false,
        autoClose: 2000,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
      });
      dispatch(resetRequestStatus());
    }

    // In case of failure
    else if (policeDashboardState.requestStatus === REQUEST_STATUS_FAILED) {
      toast.error(policeDashboardState.message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
      });
      dispatch(resetRequestStatus());
    }

  }, [policeDashboardState.requestStatus])

  // When user is loggout, redirect to login page
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('profile'));
    if (!user) {
      navigate('/', { replace: true });
    }
  }, [globalState.requestStatus]);


  // useEffect(() => {
  //   console.log(policeDashboardState)
  // }, [policeDashboardState])

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" color="" open={open}>
          <Toolbar
            // sx={{
            //   pr: '24px', // keep right padding when drawer closed
            // }}
            position="fixed" open={open} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '24px',
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >

            MissingPortal
          </Typography>
          <img style={{position:'relative', left:'100px',  width: '50px;',    height: '50px',    borderRadius: '50%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Maharashtra_Police_Insignia_%28India%29.svg/140px-Maharashtra_Police_Insignia_%28India%29.svg.png' alt='img'></img>
          <strong><p style={{position:'relative', left:'100px'}}>{stationName}</p></strong>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
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
              color="inherit"
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
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
            {/* <div style={{display: 'flex',     flexDirection: 'column'}}>
              <p style={{marginLeft: '20px', marginBottom: '0px', marginTop: '0px'}}>Officer ID</p>
              <p style={{fontSize: '12px', marginLeft: '20px', marginBottom: '0px', marginTop: '3px', color:'#ccc'}}>ID: 123456</p>
            </div> */}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        </AppBar>
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
          <Box sx={{mx:1}}>
          <List component="nav">
            <MainListItems />
            
            
          </List>
          </Box>
        </Drawer>
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
          <Box sx={{ minHeight: "84vh" }}>
            <Outlet />
          </Box>

          <Copyright sx={{ pt: 4 }} />

        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <PoliceDashboard />;
}

//  ##########################################################################################################################



// const NavigationBar = () => {
  

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed" color="">
//         <Toolbar>
         
          
//       </AppBar>
//     </Box>
//   );
// }

// export default NavigationBar;