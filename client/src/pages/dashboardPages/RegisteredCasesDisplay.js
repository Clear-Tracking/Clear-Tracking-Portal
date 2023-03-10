import React from 'react'
import UserRegisteredCard from '../../Components/UserRegisteredCard'
import Userformdata from "../../assets/data/userformdata.json"

export default function RegisteredCasesDisplay() {
  return (
    <div style={{ marginTop: "30px" }}>
      <div style={{ fontSize: "2.8rem", fontWeight: "bold", paddingBottom: "40px" }}>Registered Via APP</div>
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
