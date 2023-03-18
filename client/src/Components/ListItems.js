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
import { useState } from 'react';

export function MainListItems(props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
      };
    return (
        
        <React.Fragment>
            <ListItemButton to="/dashboard/"
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton to="/dashboard/caseregister" 
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}>
                <ListItemIcon>
                    <AppRegistrationIcon />
                </ListItemIcon>
                <ListItemText primary="Registered Cases" />
            </ListItemButton>
            <ListItemButton to="/dashboard/launchedfirdata"
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}>
                <ListItemIcon>
                    <HowToRegIcon />
                </ListItemIcon>
                <ListItemText primary="Launched FIR Data" />
            </ListItemButton>
            <ListItemButton to="/dashboard/database"
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Data Base" />
            </ListItemButton>
            <ListItemButton to="/dashboard/scanface"
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}>
                <ListItemIcon>
                    <CameraAltIcon />
                </ListItemIcon>
                <ListItemText primary="Scan Face" />
            </ListItemButton>
            <ListItemButton to=""
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}>
                <ListItemIcon>
                    <FingerprintIcon />
                </ListItemIcon>
                <ListItemText primary="Biometric Scan" />
            </ListItemButton>
            <ListItemButton to=""
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}>
                <ListItemIcon>
                    <CrisisAlertIcon />
                </ListItemIcon>
                <ListItemText primary="Alert" />
            </ListItemButton>

            <ListItemButton 
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItemButton>
        </React.Fragment>
    );
}



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

