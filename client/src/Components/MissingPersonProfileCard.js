import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MissingPersonProfileCard() {


    return (
        <>
        <Typography variant="h3" pt={2}>
            Profile
            </Typography>
            <Card sx={{ maxWidth: 345 }} style={{marginTop:"30px",marginBottom:"30px",marginLeft:"10px"}}>
            <CardMedia
                component="img"
                sx={{ width: 345 ,height:280 }}
                image="http://www.messagescollection.com/wp-content/uploads/2015/04/cute-cat-profile-for-facebook.jpg"
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography gutterBottom variant="h5" component="div" textAlign={"center"} color="black"  fontWeight="bold" fontFamily={"Poppins"} fontStyle={"normal"}lineHeight="143%"letterSpacing="-0.03rem">
          Charlie Puth
        </Typography>
        <Typography variant="body2" color="#555555" textAlign={"center"} fontWeight="600" padding="8px" background="#81D0DF" fontFamily={"Poppins"} fontStyle={"normal"}lineHeight="143%"letterSpacing="-0.03rem" textTransform={"uppercase"}>
          Male
          </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, textAlign:"center" }}>
                    Other Details
                </Box>
            </Box>            
        </Card>
        </>
    );
}