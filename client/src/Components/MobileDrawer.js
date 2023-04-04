import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { mainListItems } from './UserApplicationList';

const MobileDrawer =({open})=>{
    
    return(
        <SwipeableDrawer
            anchor={"left"}
            open={open}
           
          >
            <Box sx={{mt:10}}>
            {mainListItems}
            </Box>
          </SwipeableDrawer>
    )
}
export default MobileDrawer;