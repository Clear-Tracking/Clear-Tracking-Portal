import { Box } from '@mui/material';
import React from 'react'
import Calendar from 'react-calendar';
import "../assets/css/MiniCalendar.css"


export default function MiniCalendar() {
  return (
    <Box sx={{mx:2,color:"#087592",mt:5}}>
      <Calendar />
      </Box>
  )
}
