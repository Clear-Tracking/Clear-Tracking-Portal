import React from 'react'
//import Userformdata from "../../assets/data/userformdata.json"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { foundPersonsData } from '../../store/policeDashboardSlice';
import { backendURl } from '../../constants/Constants';
import FoundPersonCard from '../../Components/FoundPersonCard'

export default function PersonFoundData() {

// Redux State
const dispatch = useDispatch();
const policeDashboardState = useSelector((state) => state.policeDashboard);

const stationId = JSON.parse(localStorage.getItem('profile'))?.stationId;

// Call Backend APIs when Page Loads
useEffect(() => {
  if (stationId) {
    dispatch(foundPersonsData({ stationId: stationId,count:25}));
  }
}, []);

    return (
    <Box sx={{p:4}}>
    <Typography variant='h5' style={{letterSpacing:"0.03rem", fontFamily:"Poppins",fontStyle:"normal",fontWeight:"bold",lineHeight:"143%"}}>
    Found
  </Typography>
  
  <Grid container spacing={2} sx={{mt:1}}>
    {
      policeDashboardState.stationFirs.map(formdata => {
        //const url= backendURl+formdata.personpic.data.attributes.url
        //console.log(formdata)
        return (
        <Grid item md={3} xs={12} sm={6}>  <FoundPersonCard firObject={formdata} 
        
          />
          </Grid>
        )
      })
    }
  </Grid> 
  </Box>
    );
}
