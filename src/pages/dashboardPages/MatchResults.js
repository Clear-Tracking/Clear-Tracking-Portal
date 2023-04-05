import React from 'react'
import UserRegisteredCard from '../../Components/UserRegisteredCard'
import Userformdata from "../../assets/data/userformdata.json"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default function MatchResults() {
  return (
    
    <Box sx={{p:4}}>
      <Typography variant='h5' style={{letterSpacing:"0.03rem", fontFamily:"Poppins",fontStyle:"normal",fontWeight:"bold",lineHeight:"143%"}}>
      Match Results
    </Typography>
    <Grid container spacing={2} sx={{mt:1}}>
      {
        Userformdata.map(formdata => {
          return (
          <Grid item md={3} xs={12} sm={6}>  <UserRegisteredCard personimage={formdata.personpic} personfirstname={formdata.firstName} 
            personlastname={formdata.lastName} gender={formdata.gender} dateofmissing={formdata.dom}
            persondob={formdata.dob}
            id={formdata.id}
            />
            </Grid>
          )
        })
      }
    </Grid> 
    </Box>
    
  )
}
