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
import TextField from '@mui/material/TextField';

export default function MissingPersonProfileCard(props) {
    // console.log(props.userData)

    return (

        <Box>
            <Typography container gutterBottom variant="h6" sx={{ fontStyle: "Poppins", fontWeight: "bold", ml: 1 }}>
                User Profile
            </Typography>
            <Box style={{backgroundColor:"#f1f6fb", width:"95%", padding:"40px", borderRadius: "20px"}}>
                <Grid container spacing={4} >

                    <Grid item xs={12} lg={6}>
                        <img src={props.userpic}
                            style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                    </Grid>
                    <Grid item xs={12} lg={6} >
                        <Grid container direction={'row'} spacing={3}>
                            <Grid item xs={12} md={6} lg={6}>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="First Name"
                                    defaultValue={props.userData.firstName}
                                    inputProps={{ readOnly: true }}

                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Last Name"
                                    defaultValue={props.userData.lastname}
                                    inputProps={{ readOnly: true }}
                                />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Address"
                                    defaultValue={props.userData.address}
                                    inputProps={{ readOnly: true }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Gender"
                                    defaultValue={props.userData.gender}
                                    inputProps={{ readOnly: true }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Date of Birth"
                                    defaultValue={props.userData.dob}
                                    inputProps={{ readOnly: true }}
                                />
                            </Grid>
                            <Grid item xs={12} md={4} lg={4}>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Email"
                                    defaultValue={props.userData.email}
                                    inputProps={{ readOnly: true }}
                                />
                            </Grid>
                            <Grid item xs={12} md={4} lg={4}>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Phone Number"
                                    defaultValue={props.userData.phoneNo}
                                    inputProps={{ readOnly: true }}
                                />
                            </Grid>
                            <Grid item xs={12} md={4} lg={4}>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Aadhar Number"
                                    defaultValue={props.userData.AadharNo}
                                    inputProps={{ readOnly: true }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Father's Name"
                                    defaultValue={props.userData.fathername}
                                    inputProps={{ readOnly: true }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Mother's Name"
                                    defaultValue={props.userData.motherName}
                                    inputProps={{ readOnly: true }}
                                />
                            </Grid>

                        </Grid>

                    </Grid>


                </Grid>
            </Box>
        </Box>
    );
}