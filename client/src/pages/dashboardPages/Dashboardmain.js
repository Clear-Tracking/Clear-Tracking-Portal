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
import Userformdata from "../../assets/data/userformdata.json"
import AllMissingPeopleData from "../../assets/data/missingPeopleDataset.json"
import { textAlign } from '@mui/system';

export default function Dashboardmain() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={6} style={{background:"white"}} >
        <Grid item xs={12} md={8} style={{ paddingTop: "50px"}}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h5" component="div"fontWeight="bold" fontFamily={"Poppins"} fontStyle={"normal"}lineHeight="143%"letterSpacing="0.03rem"color="#000000" marginTop={"30px"} >
                  Just Now
                </Typography>
              </Grid>
              {
                Userformdata.map(formdata => {
                  return (
                    <Grid item xs={12} md={4} >
                      <CardJustNowPolice personimage={formdata.personpic} personfirstname={formdata.firstName} personlastname={formdata.lastName} gender={formdata.gender} dateofmissing={formdata.dom} />
                    </Grid>
                  )
                })
              }
              <Grid item xs={12} md={12} >
                <Typography gutterBottom variant="h5" component="div" style={{ fontFamily:"Poppins",fontStyle:"normal",fontWeight:"bold",lineHeight:"143%",letterSpacing:"0.03rem",color:"#000000",marginTop:"10px"}}>
                  Recent Cases
                </Typography>
              </Grid>
              {
                AllMissingPeopleData.map(allmissingpeople => {
                  return (
                    <Grid item xs={12}>
                      <CardCasesPolice missingpersonfirstname={allmissingpeople.firstName} missingpersonlastname={allmissingpeople.lastName} missingpersonimage={allmissingpeople.personpic}
                      missingpersongender={allmissingpeople.gender} missingpersondom={allmissingpeople.dom} />
                    </Grid>
                  )
                })
              }
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} style={{ background: "#DFEEF7" }}>
                <div style={{ marginTop: "30px",color:"#087592"}}><center><MiniCalendar h='100%' minW='90%' selectRange={false} /></center></div>
              </Grid>
              <Grid item xs={12} style={{ background: "#DFEEF7", height: "100vh",paddingTop:"100px" }}>
                <div><MapchartDasbboard /></div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
