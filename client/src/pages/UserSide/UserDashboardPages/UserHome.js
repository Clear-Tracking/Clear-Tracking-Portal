import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UserMainDisplayCard from '../../../Components/UserMainDisplayCars';

export default function UserHome() {
  return (
    //     /*<Box sx={{ flexGrow: 1 }}>
    //       <Grid container spacing={2}>
    //         <Grid item xs={12} md={3} style={{background:"pink"}}>
    //           <UserMainDisplayCard/>
    //         </Grid>
    //         <Grid item xs={12} md={3} style={{background:"pink"}}>
    //           <UserMainDisplayCard/>
    //         </Grid>
    //         <Grid item xs={12} md={3} style={{background:"pink"}}>
    //         <UserMainDisplayCard/> 
    //         </Grid>
    //         <Grid item xs={12} md={3} style={{background:"pink"}}>
    //         <UserMainDisplayCard/> 
    //         </Grid>
    //       </Grid>
    //     </Box> 
    //   );
    // } 

    // <ImageList sx={{ width:"100%", height: "15%" }} cols={6}>
    //       {itemData.map((item) => (
    //         <ImageListItem key={item.img}>
    //           <img
    //             src={`${item.img}?w=248&fit=crop&auto=format`}
    //             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
    //             alt={item.title}
    //             loading="lazy"
    //             style={{height:"204.29px ",width:"160px",borderRadius:"20px"}}
    //           />
    //           <ImageListItemBar
    //             title={item.title}
    //             style={{fontFamily:"Poppins"}}
    //             //subtitle={<span>by: {item.author}</span>}
    //             position="below"
    //           />
    //         </ImageListItem>
    //       ))}
    //     </ImageList>
    //   );
    // }
    
    <Grid container spacing={3} >
      {itemData.map((item) => (
        <Grid item lg={2} md={3} sm={4} xs={6}>
          <Box sx={{ flexGrow: 1, display: "flex",alignItems:"center",  flexDirection: "column" }}>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center",width:"100%",borderRadius: 3 }}>
              <img src={item.img}
                style={{ height: "10rem", width: "100%",objectFit: "cover",borderRadius:15}} />
            </Box>


            <Box sx={{ display: "flex", mt: 1, height: "100%" }}>
              <Typography gutterBottom variant="body1" component="div" sx={{ textAlign:"center",fontWeight:600,fontFamily: "Poppins", fontStyle: 'normal',  color: "black" }}>
                {item.title}
              </Typography>
            </Box>



          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
const itemData = [
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.A9DM3XbwBejOWI0WBcMcSgHaLG&pid=Api&P=0',
    title: 'Charlie Puth',
    //author: '@bkristastucchio',
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.A9DM3XbwBejOWI0WBcMcSgHaLG&pid=Api&P=0',
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

