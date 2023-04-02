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

import { ThemeProvider, createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   overrides: {
//     IconButton: {
//       root: {
//         '&:hover': {
//           backgroundColor: "#388ab0"
//         }
//       }
//     }
//   }
// })

const theme = createTheme({
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: "#388ab0",borderRadius:10,
                        color:"white"
                    },
                    '&.Mui-selected:hover': {
                        backgroundColor: "#388ab0",borderRadius:10,
                        color:"white"
                    },
                    '&:hover': {
                        backgroundColor: "#388ab0",borderRadius:10,
                        color:"white"
                    }
                },
            },
        },
    },
});

export function MainListItems(props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
      };
    return (
        
        <React.Fragment>
            <ThemeProvider theme={theme}>
            <ListItemButton to="/dashboard/" sx={{borderRadius:3}}
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton to="/dashboard/caseregister" sx={{borderRadius:3}}
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}>
                <ListItemIcon>
                    <AppRegistrationIcon />
                </ListItemIcon>
                <ListItemText primary="Registered Cases" />
            </ListItemButton>
            <ListItemButton to="/dashboard/launchedfirdata" sx={{borderRadius:3}}
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}>
                <ListItemIcon>
                    <HowToRegIcon />
                </ListItemIcon>
                <ListItemText primary="Launched FIR Data" />
            </ListItemButton>
            <ListItemButton to="/dashboard/database" sx={{borderRadius:3}}
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Data Base" />
            </ListItemButton>
            <ListItemButton to="/dashboard/scanface" sx={{borderRadius:3}}
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}>
                <ListItemIcon>
                    <CameraAltIcon />
                </ListItemIcon>
                <ListItemText primary="Scan Face" />
            </ListItemButton>
            <ListItemButton to="" sx={{borderRadius:3}}
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}>
                <ListItemIcon>
                    <FingerprintIcon />
                </ListItemIcon>
                <ListItemText primary="Biometric Scan" /> 
            </ListItemButton>
            <ListItemButton to="" sx={{borderRadius:3}}
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}>
                <ListItemIcon>
                    <CrisisAlertIcon />
                </ListItemIcon>
                <ListItemText primary="Alert" />
            </ListItemButton>

            <ListItemButton sx={{borderRadius:3}}
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItemButton>
            </ThemeProvider>
        </React.Fragment>
    );
}



export const secondaryListItems = (
    <React.Fragment>
        <ThemeProvider theme={theme}>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton to="/dashboard/policeprofile" sx={{borderRadius:3}}>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItemButton >
        <ListItemButton sx={{borderRadius:3}}>
            <ListItemIcon>
                <PieChartIcon />
            </ListItemIcon>
            <ListItemText primary="View Statistics" />
        </ListItemButton>
        <ListItemButton sx={{borderRadius:3}}>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        </ThemeProvider>
    </React.Fragment>
);

