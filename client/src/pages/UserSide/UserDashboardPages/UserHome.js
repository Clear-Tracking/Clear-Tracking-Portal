import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UserMainDisplayCard from '../../../Components/UserMainDisplayCars';

export default function UserHome() {
  return (
    /*<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} style={{background:"pink"}}>
          <UserMainDisplayCard/>
        </Grid>
        <Grid item xs={12} md={3} style={{background:"pink"}}>
          <UserMainDisplayCard/>
        </Grid>
        <Grid item xs={12} md={3} style={{background:"pink"}}>
        <UserMainDisplayCard/> 
        </Grid>
        <Grid item xs={12} md={3} style={{background:"pink"}}>
        <UserMainDisplayCard/> 
        </Grid>
      </Grid>
    </Box> 
  );
} */
    <ImageList sx={{ width:"100%", height: "50%",borderRadius:"20px" }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            //subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    title: 'Charlie Puth',
    //author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    title: 'Charlie Puth',
    //author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    title: 'Charlie Puth',
    //author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    title: 'Charlie Puth',
    //author: '@bkristastucchio',
  },
]; 