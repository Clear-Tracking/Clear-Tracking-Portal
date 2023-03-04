import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UserMainDisplayCard from '../../../Components/UserMainDisplayCars';

export default function UserHome() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} style={{background:"pink"}}>
          <UserMainDisplayCard/>
        </Grid>
        <Grid item xs={12} md={3} style={{background:"blue"}}>
          sh
        </Grid>
        <Grid item xs={12} md={3} style={{background:"yellow"}}>
         gjfgj 
        </Grid>
        <Grid item xs={12} md={3} style={{background:"green"}}>
          djg
        </Grid>
      </Grid>
    </Box>
  );
}