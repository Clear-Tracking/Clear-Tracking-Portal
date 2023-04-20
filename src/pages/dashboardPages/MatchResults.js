import React from 'react'
import MatchCard from '../../Components/MatchCard'
import Userformdata from "../../assets/data/userformdata.json"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';

export default function MatchResults() {

   // Redux State
   const dispatch = useDispatch();
   const policeDashboardState = useSelector((state) => state.policeDashboard);

  return (
    
    <Box sx={{p:4}}>
      <Typography variant='h5' style={{letterSpacing:"0.03rem", fontFamily:"Poppins",fontStyle:"normal",fontWeight:"bold",lineHeight:"143%"}}>
      Match Results
    </Typography>
    <Grid container spacing={2} sx={{mt:1}}>
    {
        policeDashboardState.matchResults.map(formdata => {
          //const url= backendURl+formdata.personpic.data.attributes.url
          //console.log(formdata)
          return (
            <Grid item md={3} xs={12} sm={6}>  <MatchCard firObject={formdata} 
            
              />
              </Grid>
            )
        })
      }
    </Grid> 
    </Box>
    
  )
}

          