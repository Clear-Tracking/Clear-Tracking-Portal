import React from 'react'
import MissingPersonProfileCard from '../../../Components/MissingPersonProfileCard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default function MissingPersonProfile() {
  return (
    <Box>
      <Grid container spacing={2} sx={{mt:1}}>
        <Grid item md={2} xs={12} sm={6}><MissingPersonProfileCard/>
        </Grid>
      </Grid>
    </Box>
  )
}
