import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button } from '@mui/material';

export default function UserRegisteredCard(props) {

    function viewProfileClicked() {
        console.log(props.id)

    }


    return (
        <div>
            <Box sx={{ flexGrow: 1, pb: 2 }}>
                <Grid container
                    sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", background: "#ffffff", borderRadius: "20px", padding: "1rem" }}>
                    <Grid item xs={12} md={2}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                            <img src={props.personimage}
                                style={{ borderRadius: "50%", height: "120px", width: "120px" }} />
                        </Box>
                    </Grid>
                    <Grid item xs={9} md={7}>
                        <Box sx={{ display: "flex", justifyContent: "center", ml: 1, height: "100%", flexDirection: "column" }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Poppins", fontStyle: 'normal', fontWeight: 600, color: "black" }}>
                                {props.personfirstname + " " + props.personlastname}
                            </Typography>
                            <Box> <Button variant="contained" sx={{ background: "#81D0DF" }}>Missing</Button></Box>
                            <Typography variant="body1" sx={{ mt: 1, fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400 }}>
                                {"Missing Date " + props.dateofmissing}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} md={3} sx={{ borderLeft: "1px solid #BEBEBE" }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", flexDirection: "column" }} >
                            <Typography gutterBottom variant="h5" component="div" textAlign="center" sx={{ fontFamily: "Poppins", fontStyle: 'normal', fontWeight: "bold" }}>
                                {props.persondob}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" textAlign="center" color={"#4CAF50"} fontWeight="bold" fontFamily={"Poppins"} fontStyle={"normal"}>
                                {props.gender}
                            </Typography>
                            <Button variant='contained' onClick={viewProfileClicked} style={{ padding: "10px", borderRadius: "10px" }}>View Profile</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
}