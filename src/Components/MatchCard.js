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
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import formfilldisplay from "../assets/data/formfilldisplay.json";
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { foundPerson, getStationFirsNotLaunched } from '../store/policeDashboardSlice';
import { getAllFirsLaunched } from '../api';


export default function MatchCard(props) {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [launchedBy, setLaunchedBy] = useState("")
    const dispatch = useDispatch()

    const handleFound = async() => {
        const firObjectUpdate = {... props.formDataView, found:"true"}
        delete firObjectUpdate.id;
        delete firObjectUpdate.createdAt;
        delete firObjectUpdate.publishedAt;
        delete firObjectUpdate.updatedAt;
        delete firObjectUpdate.personpic;
        //console.log(firObjectUpdate)
        const formData = {
            data: firObjectUpdate
        }
        await dispatch(foundPerson({id: props.firObject.id, formData: formData}));
        setOpen(false);
        const stationId = JSON.parse(localStorage.getItem('profile'))?.stationId;
        // if (stationId) {
        //     await dispatch(getAllFirsLaunched({ stationId: stationId,count:25})).catch(e=>console.log(e));
        //   }
        //   console.log("before navigate")
        navigate('/dashboard/')
        // console.log("after navigate")
    }
    // console.log(props.firObject)

    // const viewProfileClicked = () => navigate('/dashboard/firdetails/' + props.firObject.id)

    return (
        <>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", flexDirection: "column", boxShadow: "0px 2px 0px -1px rgba(0,0,0,0.2), 0px 4px 0px -1px rgba(0,0,0,0.14), 0px 1px 0px -1px rgba(0,0,0,0.12)", border: "1px solid #0077ff", width: "100%", borderRadius: 2, padding: 2 }}>


                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                    <img src={props.firObject.personpic}
                        style={{ borderRadius: "50%", height: "120px", width: "120px" }} />
                </Box>


                <Box sx={{ display: "flex", justifyContent: "center", mt: 1, height: "100%", flexDirection: "column" }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Poppins", fontStyle: 'normal', fontWeight: 600, color: "black" }}>
                        {props.firObject.firstName + " " + props.firObject.lastName}
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400 }}>
                        {"Missing Date: " + props.firObject.dom}
                    </Typography>
                </Box>


                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", flexDirection: "column" }} >
                    <Typography gutterBottom variant="body1" component="div" textAlign="center" sx={{ fontFamily: "Poppins", fontStyle: 'normal', fontWeight: 400 }}>
                        {"Date of Birth: " + props.firObject.dob}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" textAlign="center" color={"#4CAF50"} fontWeight="bold" fontFamily={"Poppins"} fontStyle={"normal"}>
                        {props.firObject.gender}
                    </Typography>
                    <Button variant='contained' onClick={handleClickOpen} autoFocus style={{ padding: "10px", borderRadius: "10px" }}>View Profile</Button>
                </Box>
            </Box>


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
                                    <img src={props.firObject.personpic} style={{ height: "100%", borderRadius: 15 }}
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
                                            defaultValue={props.firObject.firstName + " " + props.firObject.lastName}
                                            inputProps={{ readOnly: true }}
                                        />
                                        <TextField
                                            style={{ width: "48%" }}
                                            required
                                            id="outlined-required"
                                            label="Gender"
                                            defaultValue={props.firObject.gender}
                                            inputProps={{ readOnly: true }}
                                        /><br />
                                        <TextField
                                            style={{ width: "48%" }}
                                            required
                                            id="outlined-required"
                                            label="DOB"
                                            defaultValue={props.firObject.dob}
                                            inputProps={{ readOnly: true }}
                                        />
                                        <TextField
                                            required
                                            style={{ width: "48%" }}
                                            id="outlined-required"
                                            label="Aadhar Number"
                                            defaultValue={props.firObject.aadhar}
                                            inputProps={{ readOnly: true }}
                                        />
                                        <br />

                                        <TextField
                                            style={{ width: "48%" }}
                                            required
                                            id="outlined-required"
                                            label="Place of Missing"
                                            defaultValue={props.firObject.pom}
                                            inputProps={{ readOnly: true }}
                                        />
                                        <TextField
                                            style={{ width: "48%" }}
                                            required
                                            id="outlined-required"
                                            label="Date of Missing"
                                            defaultValue={props.firObject.dom}
                                            inputProps={{ readOnly: true }}
                                        />


                                        <TextField
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="Address"
                                            maxRows={4}
                                            defaultValue={props.firObject.address}
                                            inputProps={{ readOnly: true }}
                                        />
                                        <br /><span style={{ fontWeight: "bold", marginLeft: "15px", fontSize: "1.1rem", marginTop: "10px" }}>Physical Features</span><br />
                                        <TextField
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Height (cm)"
                                            defaultValue={props.firObject.height}
                                            inputProps={{ readOnly: true }}
                                        />
                                        <TextField
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Weight (Kg)"
                                            defaultValue={props.firObject.weight}
                                            inputProps={{ readOnly: true }}
                                        />
                                        <TextField
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Complexion"
                                            defaultValue={props.firObject.complexion}
                                            inputProps={{ readOnly: true }}
                                        />

                                        <TextField
                                            style={{ width: "23%" }}
                                            required
                                            id="outlined-required"
                                            label="Eye Colour"
                                            defaultValue={props.firObject.Eye}
                                            inputProps={{ readOnly: true }}
                                        />
                                        <TextField
                                            style={{ width: "23%" }}
                                            required
                                            id="outlined-required"
                                            label="Hair Colour"
                                            defaultValue={props.firObject.Hair}
                                            inputProps={{ readOnly: true }}
                                        />
                                        <TextField
                                            style={{ width: "23%" }}
                                            required
                                            id="outlined-required"
                                            label="Any face Marks"
                                            defaultValue={props.firObject.Face}
                                            inputProps={{ readOnly: true }}
                                        />

                                        <TextField
                                            style={{ width: "23%" }}
                                            required
                                            id="outlined-required"
                                            label="Any Disability"
                                            defaultValue={props.firObject.aod}
                                            inputProps={{ readOnly: true }}
                                        />
                                        <TextField
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Police Station Id"
                                            defaultValue={props.firObject.stationId}
                                            inputProps={{ readOnly: true }}
                                        />
                                        <TextField
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Guardian Name"
                                            defaultValue={props.firObject.guardian}
                                            inputProps={{ readOnly: true }}
                                        />
                                        <TextField
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Contact Number"
                                            defaultValue={props.firObject.Contact}
                                            inputProps={{ readOnly: true }}
                                        /><br />
                                        <span style={{ fontWeight: "bold", marginLeft: "15px", fontSize: "1.1rem", marginTop: "10px" }}>Filled by Police</span><br />
                                        <TextField
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="FIR Launched By"
                                            defaultValue={props.firObject.firLaunchedBy}
                                            inputProps={{ readOnly: true }}
                                        />
                                    </form>
                                </Box>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ padding: "20px" }}>
                    <Button variant="contained" onClick={handleFound}>Found</Button>
                    <Button variant='contained' onClick={handleClose} color="error">Close</Button>
                    {/* <Button variant='contained' onClick={viewdata} autoFocus>
                        View
                    </Button> */}
                </DialogActions>
            </Dialog>
        </>
    );
}