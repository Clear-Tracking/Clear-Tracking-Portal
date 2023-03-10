import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MiniCalendar from '../../Components/MiniCalendar';
import CardJustNowPolice from '../../Components/CardJustNowPolice';
import CardCasesPolice from '../../Components/CardCasesPolice';
import Typography from '@mui/material/Typography';
import MapchartDasbboard from '../../Components/MapchartDashboard';
import { Container } from '@mui/material';

export default function Dashboardmain() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={6} >
        <Grid item xs={12} md={8} style={{ paddingTop: "50px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h5" component="div" >
                  Just Now
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} >
                <CardJustNowPolice />
              </Grid>
              <Grid item xs={12} md={4} >
                <CardJustNowPolice />
              </Grid>
              <Grid item xs={12} md={4} >
                <CardJustNowPolice />
              </Grid>
              <Grid item xs={12} md={12} >
                <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: "20px" }}>
                  Rescent Cases
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <CardCasesPolice />
              </Grid>
              <Grid item xs={12}>
                <CardCasesPolice />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} style={{ background: "#DFEEF7" }}>
                <div style={{ marginTop: "30px" }}><center><MiniCalendar h='100%' minW='90%' selectRange={false} /></center></div>
              </Grid>
              <Grid item xs={12} style={{ background: "#DFEEF7", height: "100vh" }}>
                <div><MapchartDasbboard /></div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}