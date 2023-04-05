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
import { Button } from '@mui/material';
import { json, useParams } from 'react-router-dom';

export default function DatabaseViewProfile() {
    
const params=useParams()
    return (
        <Card sx={{ display: 'flex' }} style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", background: "#ffffff", borderRadius: "20px", margin:"100px"}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                style={{height:"607px"}}/>
            </Box>
            <Box>
                <div>
                    <span  style={{ fontSize: "2.5rem", fontWeight: "bold",margin:"20px" }}>Alec Benjamin {JSON.stringify(params)}</span><br/>
                    <span style={{fontSize:"1.05rem",margin:"20px"}}>DOB: 12 march 2010</span><br/>
<span style={{fontSize:"1.05rem",margin:"20px"}}>Gender: Male</span><br/>
<span style={{fontSize:"1.05rem",margin:"20px"}}>Place of Missing: thakur Complex</span><br/>
<span style={{fontSize:"1.05rem",margin:"20px"}}>Date of Missing: 12-2-23</span><br/>
<span style={{fontSize:"1.05rem",margin:"20px"}}>Address: This is the adderess</span><br/>
<span style={{fontSize:"1.05rem",margin:"20px"}}>Aadhar Number: 9999 9999 9999 </span><br/>
<span style={{fontWeight:"bold", margin: "20px", fontSize:"1.5rem", paddingTop:"30px"}}>Physical Features</span><br/>
<span style={{fontSize:"1.05rem",margin:"20px"}}>Height: 5.8 feet</span><br/>
<span style={{fontSize:"1.05rem",margin:"20px"}}>Weight: 74 Kg</span><br/>
<span style={{fontSize:"1.05rem",margin:"20px"}}>Complexion: Fair</span><br/>
<span style={{fontSize:"1.05rem",margin:"20px"}}>Eye Colour: Black</span><br/>
<span style={{fontSize:"1.05rem",margin:"20px"}}>Hair Colour: Black</span><br/>
<span style={{fontSize:"1.05rem",margin:"20px"}}>Any face Marks: None</span><br/>
<span style={{fontSize:"1.05rem",margin:"20px"}}>Any Disability: None</span><br/>

<span style={{fontSize:"1.05rem",margin:"20px"}}>Neared Police Station: Samta Nagar</span><br/>

<span style={{fontSize:"1.05rem",margin:"20px"}}>Guardian Name: Black Benjamin</span><br/>
<span style={{fontSize:"1.05rem",margin:"20px"}}>Guardian Name: Black Benjamin</span><br/>
<span style={{fontSize:"1.05rem",margin:"20px"}}>Contact Number: 1234567890</span><br/>
<Button variant="contained" style={{fontSize:"1.05rem",margin:"20px"}}>FOUND</Button>
                </div>
            </Box>
        </Card>
    );
}