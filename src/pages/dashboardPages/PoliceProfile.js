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

export default function PoliceProfile() {


    return (
        <>
        <Typography variant="h3" pt={2}>
            Profile
            </Typography>
            <Card sx={{ display: 'flex' }} style={{width:"80vw" , marginTop:"40px"}}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="http://www.messagescollection.com/wp-content/uploads/2015/04/cute-cat-profile-for-facebook.jpg"
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Police Station Name
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Address
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    Statistics of cases launched n found
                </Box>
            </Box>            
        </Card>
        </>
    );
}