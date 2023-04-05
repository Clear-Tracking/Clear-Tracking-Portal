import React from 'react'
import MissingPersonProfileCard from '../../../Components/MissingPersonProfileCard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default function MissingPersonProfile() {
  return (
    <Box sx={{mx:"2rem"}}>
      <Grid container spacing={2} sx={{mt:1}}>
        
        <Grid item md={4} xs={12} sm={6} lg={3} xl={2}><MissingPersonProfileCard/>
        </Grid>
        
      </Grid>
    </Box>
  )
}
