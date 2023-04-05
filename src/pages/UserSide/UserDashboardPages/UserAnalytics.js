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
import UserLeads from '../../../Components/UserLeads';
import AllMissingPeopleData from "../../../assets/data/missingPeopleDataset.json";

export default function UserAnalytics(props) {


    return (
        <>

            <Box>
                <Grid container spacing={3}>

                    <Grid item xs={12}  sm={4}>
                        <Grid container spacing={2} >
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h6"  sx={{ fontStyle: "Poppins",fontWeight:"bold",ml:1 }}>
                                    Missing Person
                                </Typography>
                                <Box sx={{ display: 'flex', height: "100%", flexDirection: "column" }}>
                                    <img src={formfilldisplay.personpic} style={{ height: "40vh", borderRadius: 15 }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    style={{ width: "100%" }}
                                    required
                                    id="outlined-required"
                                    label="Name"
                                    defaultValue={formfilldisplay.firstName + " " + formfilldisplay.lastName}
                                    inputProps={{ readOnly: true }}
                                />
                            </Grid>
                            <Grid item xs={12} >

                                <TextField
                                    style={{ width: "100%" }}
                                    required
                                    id="outlined-required"
                                    label="Contact no"
                                    defaultValue={formfilldisplay.contact}
                                    inputProps={{ readOnly: true }}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    style={{ width: "100%" }}
                                    id="outlined-required"
                                    label="Aadhar Number"
                                    defaultValue={formfilldisplay.aadhar}
                                    inputProps={{ readOnly: true }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                        <Typography gutterBottom variant="h6" sx={{fontStyle: "Poppins",fontWeight:"bold",ml:1}}>Leads</Typography>
                        </Grid>
                        {
                            AllMissingPeopleData.map(allmissingpeople => {
                                return (
                                  <Grid item xs={12}>
                                    <UserLeads missingpersonfirstname={allmissingpeople.firstName} missingpersonlastname={allmissingpeople.lastName} missingpersonimage={allmissingpeople.personpic}
                                      missingpersongender={allmissingpeople.gender} missingpersondom={allmissingpeople.dom} missingdob={allmissingpeople.dob} />
                                  </Grid>
                                )
                              })
                        }
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
}