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

export default function UserRegisteredCard(props) {
 
    function viewProfileClicked() {
        console.log(props.id)
       
    }


    return (
        <Card sx={{ display: 'flex' }} style={{ justifyContent: 'space-between', maxWidth: "80vw", marginBottom: "30px" }}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <img src={props.personimage}
                        style={{ height: "250px", width: "250px", borderRadius: "50%", padding: "20px", marginLeft: "40px" }} />
                </Box>
                <Box>
                    <div style={{ paddingTop: "40px", paddingLeft: "60px" }}>
                        <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{props.personfirstname + " " + props.personlastname}</span><span style={{ paddingLeft: "25px", funtSize: "1.2rem", background: "blue", padding: "3px", borderRadius: "25px", color: "#ffffff" }}>Missing</span> <br />
                        <span style={{ fontSize: "1.5rem", marginTop: "30px" }}>{"Missing Date: " + props.dateofmissing}</span><br />
                        <span style={{ fontSize: "1.5rem", marginTop: "20px" }}>{props.persondob}</span><br />
                        <span style={{ fontSize: "1.5rem", marginTop: "20px" }}>{props.gender}</span><br />
                    </div>

                </Box>
            </Box>
            <Box>
                <Button variant='contained' onClick={viewProfileClicked}
                    style={{ padding: "10px", borderRadius: "22px", marginTop: "110px", right: "30px" }}>View Profile</Button>
            </Box>
        </Card>
    );
}