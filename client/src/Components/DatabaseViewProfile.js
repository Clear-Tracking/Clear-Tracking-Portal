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
        <Card sx={{ display: 'flex' }} style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", background: "#ffffff", borderRadius: "20px"}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                style={{height:"500px"}}/>
            </Box>
            <Box>
                <div>
                    <span  style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Raju Rastogi {JSON.stringify(params)}</span><br/>
                    <span>DOB: 12 march 2010</span><br/>
<span>Gender :Male</span><br/>
<span>Place of Missing: thakur Complex</span><br/>
<span>Date of Missing: 12-2-23</span><br/>
<span>Address: This is the adderess</span><br/>
<span>Aadhar Number: 9999 9999 9999 </span><br/>
<span style={{fontWeight:"bold"}}>Physical Features</span><br/>
<span>Height: 5.8 feet</span><br/>
<span>Weight: 74 Kg</span><br/>
<span>Complexion: Fair</span><br/>
<span>Eye Colour: Black</span><br/>
<span>Hair Colour: Black</span><br/>
<span>Any face Marks: None</span><br/>
<span>Any Disability: None</span><br/>

<span>Neared Police Station: Samta Nagar</span><br/>

<span>Guardian Name</span><br/>
<span>Contact Number</span><br/>
<Button variant="contained">FOUND</Button>
                </div>
            </Box>
        </Card>
    );
}