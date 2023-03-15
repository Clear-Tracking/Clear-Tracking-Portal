import React from 'react'
import UserRegisteredCard from '../../Components/UserRegisteredCard'
import Userformdata from "../../assets/data/userformdata.json"
import Typography from '@mui/material/Typography';
export default function RegisteredCasesDisplay() {
  return (
    
    <div>
      <Typography variant='h5' style={{marginTop:"30px",letterSpacing:"0.03rem", fontFamily:"Poppins",fontStyle:"normal",fontWeight:"bold",lineHeight:"143%"}}>
      Registered Via App
    </Typography>
      {
        Userformdata.map(formdata => {
          return (
            <UserRegisteredCard personimage={formdata.personpic} personfirstname={formdata.firstName} 
            personlastname={formdata.lastName} gender={formdata.gender} dateofmissing={formdata.dom}
            persondob={formdata.dob}
            id={formdata.id}
            />
          )
        })
      }
      
    </div>
    
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
