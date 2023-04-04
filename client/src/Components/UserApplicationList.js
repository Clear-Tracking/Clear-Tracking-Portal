import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';

export const mainListItems = (
    <React.Fragment>
        <Link  style={{ textDecoration: "none", color: "black" }} to="/userdashboard">
        <ListItemButton >
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItemButton>
        </Link>
        <Link  style={{ textDecoration: "none", color: "black" }} to="/userdashboard/profile" >
        <ListItemButton >
            <ListItemIcon>
                <AppRegistrationIcon />
            </ListItemIcon>
            <ListItemText primary="Your Profile" />
        </ListItemButton>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/userdashboard/reportmissing">
        <ListItemButton >
            <ListItemIcon>
                <HowToRegIcon />
            </ListItemIcon>
            <ListItemText primary="Report Missing" />
        </ListItemButton>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/userdashboard/missingpersonprofile">
        <ListItemButton >
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Missing Person Profile" />
        </ListItemButton>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/userdashboard/">
        <ListItemButton >
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Notification" />
        </ListItemButton>
        </Link>
        
        <Link style={{ textDecoration: "none", color: "black" }} to="/userdashboard/analytics">
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
        </ListItemButton>
        </Link>
    </React.Fragment>
);