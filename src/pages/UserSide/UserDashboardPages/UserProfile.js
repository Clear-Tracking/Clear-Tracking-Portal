import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import formfilldisplay from "../../../assets/data/formfilldisplay.json";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function UserProfile(props) {


    return (
        <>
        <Typography variant="h4" align="center" sx={{fontStyle:"Poppins"}}>
        Your Profile 
        </Typography>
            <Box>
                <Grid container sx={{ mt: 2 }}>
                    <Grid item xs={1} sm={2} md={4}></Grid>
                    <Grid item xs={10} sm={8} md={4}>
                        <Grid container sx={{ mt: 2 }}>
                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', height: "100%", flexDirection: "column" }}>
                                    <img src={formfilldisplay.personpic} style={{ height: "40vh", borderRadius: 15 }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} sm={2} md={4}></Grid>
                </Grid>
                <Grid container sx={{mt:4}}>
                    <Grid item xs={1} md={2} lg={3}></Grid>
                    <Grid item xs={10} md={8} lg={6}>
                        <Grid container spacing={3} >
                            <Grid item xs={12} md={12} lg={6}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Name"
                                defaultValue={formfilldisplay.firstName + " " + formfilldisplay.lastName}
                                inputProps={{ readOnly: true }}
                            />
                            </Grid>
                            <Grid item xs={12} md={12} lg={6}>

                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Contact no"
                                defaultValue={formfilldisplay.contact}
                                inputProps={{ readOnly: true }}
                            />
                            </Grid>
                            <Grid item xs={12} md={12} lg={6}>
                            <TextField
                                required
                                style={{ width: "100%" }}
                                id="outlined-required"
                                label="Aadhar Number"
                                defaultValue={formfilldisplay.aadhar}
                                inputProps={{ readOnly: true }}
                            />
                            </Grid>
                            <Grid item xs={12} md={12} lg={6}>


                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Email"
                            //defaultValue={formfilldisplay.pom}
                            inputProps={{ readOnly: true }}
                            />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={2} lg={3}></Grid>
                </Grid>
            </Box>
        </>
    );
}