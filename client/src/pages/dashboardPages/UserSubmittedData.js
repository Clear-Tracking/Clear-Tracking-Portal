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
import { Button, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import formfilldisplay from "../../assets/data/formfilldisplay.json"

export default function UserSubmittedData() {
    const theme = useTheme();
    console.log(formfilldisplay.firstName);
    return (
        <>
            <Card sx={{ display: 'flex' }} style={{width:"95%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", background: "#ffffff", borderRadius: "20px", margin: "30px",marginTop:"100px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <img src={formfilldisplay.personpic}
                        style={{ height: "610px" }} />
                </Box>
                <Box component="form" style={{padding:"20px"}}
                    sx={{
                        "flexGrow":1,
                        '& .MuiTextField-root': { m: 1 },
                    }}>
                    

                    <form>
                        <TextField
                        style={{width:"48%"}}
                            required
                            id="outlined-required"
                            label="Name"
                            defaultValue={formfilldisplay.firstName + " " + formfilldisplay.lastName}
                        />
                        <TextField
                        style={{width:"48%"}}
                            required
                            id="outlined-required"
                            label="Gender"
                            defaultValue={formfilldisplay.gender}
                        /><br/>
                        <TextField
                        style={{width:"48%"}}
                            required
                            id="outlined-required"
                            label="DOB"
                            defaultValue={formfilldisplay.dob}
                        />
                         <TextField
                            required
                            style={{width:"48%"}}
                            id="outlined-required"
                            label="Aadhar Number"
                            defaultValue={formfilldisplay.aadhar}
                        />
                        <br/>

                        <TextField
                        style={{width:"48%"}}
                            required
                            id="outlined-required"
                            label="Place of Missing"
                            defaultValue={formfilldisplay.pom}
                        />
                        <TextField
                        style={{width:"48%"}}
                            required
                            id="outlined-required"
                            label="Date of Missing"
                            defaultValue={formfilldisplay.dom}
                        />
                        
                       
                        <TextField
                            required
                            fullWidth
                            id="outlined-required"
                            label="Address"
                            maxRows={4}
                            defaultValue={formfilldisplay.Address}
                        />
                        <br/><span style={{ fontWeight: "bold", marginLeft:"15px", fontSize:"1.1rem",marginTop:"10px" }}>Physical Features</span><br />
                        <TextField
                        style={{width:"31%"}}
                            required
                            id="outlined-required"
                            label="Height (cm)"
                            defaultValue={formfilldisplay.Height}
                        />
                        <TextField
                        style={{width:"31%"}}
                            required
                            id="outlined-required"
                            label="Weight (Kg)"
                            defaultValue={formfilldisplay.Weight}
                        />
                        <TextField
                        style={{width:"31%"}}
                            required
                            id="outlined-required"
                            label="Complexion"
                            defaultValue={formfilldisplay.complexion}
                        />

                        <TextField
                        style={{width:"23%"}}
                            required
                            id="outlined-required"
                            label="Eye Colour"
                            defaultValue={formfilldisplay.Eye}
                        />
                        <TextField
                        style={{width:"23%"}}
                            required
                            id="outlined-required"
                            label="Hair Colour"
                            defaultValue={formfilldisplay.Hair}
                        />
                        <TextField
                        style={{width:"23%"}}
                            required
                            id="outlined-required"
                            label="Any face Marks"
                            defaultValue={formfilldisplay.Face}
                        />

                        <TextField
                        style={{width:"23%"}}
                            required
                            id="outlined-required"
                            label="Any Disability"
                            defaultValue={formfilldisplay.aod}
                        />
                        <TextField
                        style={{width:"31%"}}
                            required
                            id="outlined-required"
                            label="Neared Police Station"
                            defaultValue={formfilldisplay.neareststation}
                        />
                        <TextField
                        style={{width:"31%"}}
                            required
                            id="outlined-required"
                            label="Guardian Name"
                            defaultValue={formfilldisplay.Guardian}
                        />
                        <TextField
                        style={{width:"31%"}}
                            required
                            id="outlined-required"
                            label="Contact Number"
                            defaultValue={formfilldisplay.Contact}
                        /><br/>
                        <Button variant="contained">Launch FIR</Button>
                    </form>
                </Box>

            </Card>

        </>
    );
}