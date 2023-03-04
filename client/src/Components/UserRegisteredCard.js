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

export default function UserRegisteredCard() {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex' }} style={{ justifyContent: 'space-between', maxWidth: "80vw", marginBottom: "30px" }}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                        style={{ height: "250px", width: "250px", borderRadius: "50%", padding: "20px", marginLeft: "40px" }} />
                </Box>
                <Box>
                    <div style={{ paddingTop: "40px", paddingLeft: "60px" }}>
                        <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Charlie Puth</span><span style={{ paddingLeft: "25px", funtSize: "1.2rem", background: "blue", padding: "3px", borderRadius: "25px", color: "#ffffff" }}>Missing</span> <br />
                        <span style={{ fontSize: "1.5rem", marginTop: "30px" }}>Missing date</span><br />
                        <span style={{ fontSize: "1.5rem", marginTop: "20px" }}>DOB</span><br />
                        <span style={{ fontSize: "1.5rem", marginTop: "20px" }}>Gender</span><br />
                    </div>

                </Box>
            </Box>
            <Box>
                <Button variant='contained' style={{ padding: "10px", borderRadius: "22px", marginTop: "110px", right: "30px" }}>View Profile</Button>
            </Box>
        </Card>
    );
}