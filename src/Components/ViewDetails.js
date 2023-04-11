import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { foundPerson,getStationFirsNotLaunched,getAllFirsLaunched  } from '../store/policeDashboardSlice';
//import formfilldisplay from "../assets/data/formfilldisplay.json"

export default function ViewDetails(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const navigate = useNavigate();

    //const viewdata = () => navigate('/dashboard/viewpersondetail/' + props.perid)
    const dispatch = useDispatch()

    const foundPersonEvent = async() => {
        const firObjectUpdateFound = {... props.formDataView, found:"true"}
        delete firObjectUpdateFound.id;
        delete firObjectUpdateFound.createdAt;
        delete firObjectUpdateFound.publishedAt;
        delete firObjectUpdateFound.updatedAt;
        delete firObjectUpdateFound.personpic;
        console.log(firObjectUpdateFound)
        const formData = {
            data: firObjectUpdateFound
        }
        await dispatch(foundPerson({id: props.formDataView.id, formData: formData}));
        setOpen(false);
        
        const stationId = JSON.parse(localStorage.getItem('profile'))?.stationId;
        if (stationId) {
            dispatch(getStationFirsNotLaunched({ stationId: stationId,count:25}));
          }
          dispatch(getAllFirsLaunched());
    }
    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                View
            </Button>
            {/* modal */}
            <Dialog style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "20px" }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
                maxWidth="xl"
            >

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Grid container>
                            <Grid item xs={4}>
                                <Box sx={{ display: 'flex', height: "100%", flexDirection: "column", justifyContent: "center" }}>
                                    <img src={props.formDataView.personpic} style={{ height: "100%", borderRadius: 15 }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={8}>
                                <Box component="form" style={{ padding: "20px" }}
                                    sx={{
                                        "flexGrow": 1,
                                        '& .MuiTextField-root': { m: 1 },
                                    }}>


                                    <form>
                                        <TextField
                                            style={{ width: "48%" }}
                                            required
                                            id="outlined-required"
                                            label="Name"
                                            defaultValue={props.formDataView.firstName + " " + props.formDataView.lastName}
                                            inputProps={{ readOnly: true }}
                                        />
                                        <TextField
                                            style={{ width: "48%" }}
                                            required
                                            id="outlined-required"
                                            label="Gender"
                                            defaultValue={props.formDataView.gender}
                                        /><br />
                                        <TextField
                                            style={{ width: "48%" }}
                                            required
                                            id="outlined-required"
                                            label="DOB"
                                            defaultValue={props.formDataView.dob}
                                        />
                                        <TextField
                                            required
                                            style={{ width: "48%" }}
                                            id="outlined-required"
                                            label="Aadhar Number"
                                            defaultValue={props.formDataView.aadhar}
                                        />
                                        <br />

                                        <TextField
                                            style={{ width: "48%" }}
                                            required
                                            id="outlined-required"
                                            label="Place of Missing"
                                            defaultValue={props.formDataView.pom}
                                        />
                                        <TextField
                                            style={{ width: "48%" }}
                                            required
                                            id="outlined-required"
                                            label="Date of Missing"
                                            defaultValue={props.formDataView.dom}
                                        />


                                        <TextField
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="Address"
                                            maxRows={4}
                                            defaultValue={props.formDataView.address}
                                        />
                                        <br /><span style={{ fontWeight: "bold", marginLeft: "15px", fontSize: "1.1rem", marginTop: "10px" }}>Physical Features</span><br />
                                        <TextField
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Height (cm)"
                                            defaultValue={props.formDataView.height}
                                        />
                                        <TextField
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Weight (Kg)"
                                            defaultValue={props.formDataView.weight}
                                        />
                                        <TextField
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Complexion"
                                            defaultValue={props.formDataView.complexion}
                                        />

                                        <TextField
                                            style={{ width: "23%" }}
                                            required
                                            id="outlined-required"
                                            label="Eye Colour"
                                            defaultValue={props.formDataView.Eye}
                                        />
                                        <TextField
                                            style={{ width: "23%" }}
                                            required
                                            id="outlined-required"
                                            label="Hair Colour"
                                            defaultValue={props.formDataView.Hair}
                                        />
                                        <TextField
                                            style={{ width: "23%" }}
                                            required
                                            id="outlined-required"
                                            label="Any face Marks"
                                            defaultValue={props.formDataView.Face}
                                        />

                                        <TextField
                                            style={{ width: "23%" }}
                                            required
                                            id="outlined-required"
                                            label="Any Disability"
                                            defaultValue={props.formDataView.aod}
                                        />
                                        <TextField
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Police Station Id"
                                            defaultValue={props.formDataView.stationId}
                                        />
                                        <TextField
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Guardian Name"
                                            defaultValue={props.formDataView.guardian}
                                        />
                                        <TextField
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Contact Number"
                                            defaultValue={props.formDataView.Contact}
                                        /><br />
                                        <span style={{ fontWeight: "bold", marginLeft: "15px", fontSize: "1.1rem", marginTop: "10px" }}>Filled by Police</span><br />
                                        <TextField
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="FIR Launched By"
                                            value={props.formDataView.firLaunchedBy}

                                        />
                                    </form>
                                </Box>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ padding: "20px" }}>
                    <Button variant="contained" onClick={foundPersonEvent}>Found</Button>
                    <Button variant='contained' onClick={handleClose} color="error">Close</Button>
                    {/* <Button variant='contained' onClick={viewdata} autoFocus>
                        View
                    </Button> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}