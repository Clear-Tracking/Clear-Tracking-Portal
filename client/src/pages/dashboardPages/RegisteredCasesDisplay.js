import React from 'react'
import UserRegisteredCard from '../../Components/UserRegisteredCard'
import Userformdata from "../../assets/data/userformdata.json"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default function RegisteredCasesDisplay() {
  return (
    
    <Box sx={{p:4}}>
      <Typography variant='h5' style={{letterSpacing:"0.03rem", fontFamily:"Poppins",fontStyle:"normal",fontWeight:"bold",lineHeight:"143%"}}>
      Registered Via App
    </Typography>
    <Grid container spacing={2} sx={{mt:1}}>
      {
        Userformdata.map(formdata => {
          return (
          <Grid item xs={3}>  <UserRegisteredCard personimage={formdata.personpic} personfirstname={formdata.firstName} 
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



// {
//   Userformdata.map(formdata => {
//     return (
//       <Grid item xs={12} md={4} >
//         <CardJustNowPolice personimage={formdata.personpic} personfirstname={formdata.firstName} personlastname={formdata.lastName} gender={formdata.gender} dateofmissing={formdata.dom} />
//       </Grid>
//     )
//   })
// }
