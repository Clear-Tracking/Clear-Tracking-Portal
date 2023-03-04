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
import PieChartIcon from '@mui/icons-material/PieChart';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton to="/dashboard/">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton to="/dashboard/caseregister">
            <ListItemIcon>
                <AppRegistrationIcon />
            </ListItemIcon>
            <ListItemText primary="Registered Cases" />
        </ListItemButton>
        <ListItemButton to="/dashboard/launchedfirdata">
            <ListItemIcon>
                <HowToRegIcon />
            </ListItemIcon>
            <ListItemText primary="Launched FIR Data" />
        </ListItemButton>
        <ListItemButton to="/dashboard/database">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Data Base" />
        </ListItemButton>
        <ListItemButton to="/dashboard/scanface">
            <ListItemIcon>
                <CameraAltIcon />
            </ListItemIcon>
            <ListItemText primary="Scan Face" />
        </ListItemButton>
        <ListItemButton to="">
            <ListItemIcon>
                <FingerprintIcon />
            </ListItemIcon>
            <ListItemText primary="Biometric Scan" />
        </ListItemButton>
        <ListItemButton to="">
            <ListItemIcon>
                <CrisisAlertIcon />
            </ListItemIcon>
            <ListItemText primary="Alert" />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton to="/dashboard/policeprofile">
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PieChartIcon />
            </ListItemIcon>
            <ListItemText primary="View Statistics" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
    </React.Fragment>
);