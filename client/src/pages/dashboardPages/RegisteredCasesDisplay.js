import React from 'react'
import UserRegisteredCard from '../../Components/UserRegisteredCard'
export default function RegisteredCasesDisplay() {
  return (
    <div style={{marginTop:"30px"}}>
        <div style={{ fontSize: "2.8rem", fontWeight: "bold", paddingBottom:"40px" }}>Registered Via APP</div>
        <UserRegisteredCard/>
        <UserRegisteredCard/>
    </div>
  )
}
