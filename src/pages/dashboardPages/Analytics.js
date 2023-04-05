import * as React from 'react';

import { Typography, Grid } from '@mui/material';

import Box from '@mui/material/Box';

import GenderAnalytics from '../../Components/GenderAnalytics';
import RegionAnalytics from '../../Components/RegionAnalytics';
import YearlyAnalytics from '../../Components/YearlyAnalytics';

export default function Dashboarddatabase() {
    return (

        <Box sx={{ p: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={5}  >
                    <Box sx={{backgroundColor:"#f1f6fb",borderRadius:4,p:1}}>
                    <Typography variant='h6'style={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: "bold", letterSpacing: "0.03rem", lineHeight: "143%" }}>
                        Gender Analytics
                    </Typography>
                    <Box sx={{ height: "40vh" }}>
                        <GenderAnalytics />
                    </Box>
                    </Box>
                </Grid>
                <Grid item xs={7}  >
                <Box sx={{backgroundColor:"#f1f6fb",borderRadius:4,p:1}}>
                    <Typography variant='h6'style={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: "bold", letterSpacing: "0.03rem", lineHeight: "143%" }}>
                        Region Analytics
                    </Typography>
                    <Box sx={{ height: "40vh" }}>
                        <RegionAnalytics />
                    </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} >
                <Box sx={{backgroundColor:"#f1f6fb",borderRadius:4,p:1}}>
                    <Typography variant='h6'style={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: "bold", letterSpacing: "0.03rem", lineHeight: "143%" }}>
                        Yearly Analytics
                    </Typography>
                    <Box sx={{ height: "60vh" }}>
                        <YearlyAnalytics />
                    </Box>
                    </Box>
                </Grid>

                

            </Grid>
        </Box >
    );

}
