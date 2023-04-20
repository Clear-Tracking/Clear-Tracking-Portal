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
import Grid from '@mui/material/Grid';
export default function MissingPersonProfileCard(props) {
    // console.log(props.userData)

    return (

        <Box>
            <Typography container gutterBottom variant="h6" sx={{ fontStyle: "Poppins", fontWeight: "bold", ml: 1 }}>
                User Profile
            </Typography>
            <Grid container spacing={3}>

                <Grid item xs={12} lg={4}>
                    <img src={props.userpic}
                        style={{height:"100%", width:"100%" }}/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            {props.userData.firstName}
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
        </Box>
    );
}