import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import TextField from '@mui/material/TextField';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/material';
export default function UserRegisteredMissingProfile(props) {
    if(props.missingObject.isLaunched){
        var display = "Fir Launched"
        var color= "green"
    }
    else{
        var display = "Fir Yet to Launch"
        var color= "red"
    }
    return (
        <Box>
            <Typography variant="h4" align="center" sx={{fontStyle:"Poppins"}}>
        Missing Person Profile
        <span style={{background: color, fontSize:"1rem", color:"white"}}>{display}</span>
        </Typography>
            <Grid>
            <Grid container sx={{ mt: 2 }}>
                <Grid item xs={1} sm={2} md={4}></Grid>
                <Grid item xs={10} sm={8} md={4}>
                    <Grid container sx={{ mt: 2 }}>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', height: "100%", flexDirection: "column" }}>
                                <img src={props.missingObject.personpic} style={{ height: "40vh", borderRadius: 15 }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} sm={2} md={4}></Grid>
            </Grid>
            <Grid container sx={{ mt: 4 }}>
                <Grid item xs={1} md={2} lg={3}></Grid>
                <Grid item xs={10} md={8} lg={6}>
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={12} lg={12}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Name"
                                defaultValue={props.missingObject.firstName + " " + props.missingObject.lastName}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <TextField
                                required
                                style={{ width: "100%" }}
                                id="outlined-required"
                                label="Aadhar Number"
                                defaultValue={props.missingObject.aadhar}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Gender"
                                defaultValue={props.missingObject.gender}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Guardian Name"
                                defaultValue={props.missingObject.guardian}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Contact Number"
                                defaultValue={props.missingObject.Contact}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Address"
                                defaultValue={props.missingObject.address}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Date of Birth"
                                defaultValue={props.missingObject.dob}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>

                        <Grid item xs={12} md={12} lg={6}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Place of Missing"
                                defaultValue={props.missingObject.pom}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Date of Missing"
                                defaultValue={props.missingObject.dom}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Police Station"
                                defaultValue={props.missingObject.stationId}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>

                        <Grid item xs={12} md={12} lg={12}>
                            <Typography> Physical Features</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} lg={4}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Complexion"
                                defaultValue={props.missingObject.complexion}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={4}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Eye Colour"
                                defaultValue={props.missingObject.Eye}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={4}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Hair Colour"
                                defaultValue={props.missingObject.Hair}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Height"
                                defaultValue={props.missingObject.height + " cm"}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Weight"
                                defaultValue={props.missingObject.weight + " Kg"}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Any Facial Marks"
                                defaultValue={props.missingObject.Face}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Any Disabilities"
                                defaultValue={props.missingObject.aod}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={2} lg={3}></Grid>
            </Grid>
            </Grid>
        </Box>
    )
}
