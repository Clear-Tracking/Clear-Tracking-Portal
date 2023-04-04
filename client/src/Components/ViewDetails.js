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
import formfilldisplay from "../assets/data/formfilldisplay.json"

export default function ViewDetails(params) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const navigate = useNavigate();


    const viewdata = () => navigate('/dashboard/viewpersondetail/' + params.perid)

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
                                    <img src={formfilldisplay.personpic} style={{ height: "65%" }}
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
                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            style={{ width: "48%" }}
                                            required
                                            id="outlined-required"
                                            label="Name"
                                            defaultValue={formfilldisplay.firstName + " " + formfilldisplay.lastName}
                                            inputProps={{ readOnly: true }}
                                        />
                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            style={{ width: "48%" }}
                                            required
                                            id="outlined-required"
                                            label="Gender"
                                            defaultValue={formfilldisplay.gender}
                                        /><br />
                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            style={{ width: "48%" }}
                                            required
                                            id="outlined-required"
                                            label="DOB"
                                            defaultValue={formfilldisplay.dob}
                                        />
                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            required
                                            style={{ width: "48%" }}
                                            id="outlined-required"
                                            label="Aadhar Number"
                                            defaultValue={formfilldisplay.aadhar}
                                        />
                                        <br />

                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            style={{ width: "48%" }}
                                            required
                                            id="outlined-required"
                                            label="Place of Missing"
                                            defaultValue={formfilldisplay.pom}
                                        />
                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            style={{ width: "48%" }}
                                            required
                                            id="outlined-required"
                                            label="Date of Missing"
                                            defaultValue={formfilldisplay.dom}
                                        />


                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="Address"
                                            maxRows={4}
                                            defaultValue={formfilldisplay.Address}
                                        />
                                        <br /><span style={{ fontWeight: "bold", marginLeft: "15px", fontSize: "1.1rem", marginTop: "10px" }}>Physical Features</span><br />
                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Height (cm)"
                                            defaultValue={formfilldisplay.Height}
                                        />
                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Weight (Kg)"
                                            defaultValue={formfilldisplay.Weight}
                                        />
                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Complexion"
                                            defaultValue={formfilldisplay.complexion}
                                        />

                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            style={{ width: "23%" }}
                                            required
                                            id="outlined-required"
                                            label="Eye Colour"
                                            defaultValue={formfilldisplay.Eye}
                                        />
                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            style={{ width: "23%" }}
                                            required
                                            id="outlined-required"
                                            label="Hair Colour"
                                            defaultValue={formfilldisplay.Hair}
                                        />
                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            style={{ width: "23%" }}
                                            required
                                            id="outlined-required"
                                            label="Any face Marks"
                                            defaultValue={formfilldisplay.Face}
                                        />

                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            style={{ width: "23%" }}
                                            required
                                            id="outlined-required"
                                            label="Any Disability"
                                            defaultValue={formfilldisplay.aod}
                                        />
                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Neared Police Station"
                                            defaultValue={formfilldisplay.neareststation}
                                        />
                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Guardian Name"
                                            defaultValue={formfilldisplay.Guardian}
                                        />
                                        <TextField InputProps={{
                                            readOnly: true,
                                        }}
                                            style={{ width: "31%" }}
                                            required
                                            id="outlined-required"
                                            label="Contact Number"
                                            defaultValue={formfilldisplay.Contact}
                                        /><br />

                                    </form>
                                </Box>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ padding: "20px" }}>
                    <Button variant="contained">Found</Button>
                    <Button variant='contained' onClick={handleClose} color="error">Close</Button>
                    {/* <Button variant='contained' onClick={viewdata} autoFocus>
                        View
                    </Button> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}