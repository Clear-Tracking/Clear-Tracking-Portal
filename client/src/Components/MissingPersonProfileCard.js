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

export default function MissingPersonProfileCard() {


    return (
        
        <Box sx={{ flexGrow: 1, display:"flex",alignItems: "center",flexDirection:"column",boxShadow: "0px 2px 0px -1px rgba(0,0,0,0.2), 0px 4px 0px -1px rgba(0,0,0,0.14), 0px 1px 0px -1px rgba(0,0,0,0.12)",border: "1px solid #0077ff",width:"100%",borderRadius:2,padding:2 }}>
                
                    
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                    <img src='https://tse4.mm.bing.net/th?id=OIP.A9DM3XbwBejOWI0WBcMcSgHaLG&pid=Api&P=0'
                        style={{ borderRadius: "50%", height: "120px", width: "120px" }} />
                </Box>
                
                
                <Box sx={{ display: "flex", justifyContent: "center",mt:1, height: "100%", flexDirection: "column" }}>
                    <Typography gutterBottom variant="h5" component="div" align="center" sx={{ fontFamily: "Poppins", fontStyle: 'normal', fontWeight: 600, color: "black" }}>
                        Charlie Puth
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400 }}>
                        {"Missing Date: " + "12-3-23"}
                    </Typography>
                </Box>
                
                
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", flexDirection: "column" }} >
                    <Typography gutterBottom variant="body2" component="div" align="center" sx={{ fontFamily: "Poppins", fontStyle: 'normal', fontWeight: 400 }}>
                        {"Date of Birth: " +"1-3-20"}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" align="center" color={"#4CAF50"} fontWeight="bold" fontFamily={"Poppins"} fontStyle={"normal"}>
                        Male
                    </Typography>
                    {/* <Button variant='contained' onClick={viewProfileClicked} style={{ padding: "10px", borderRadius: "10px" }}>View Profile</Button> */}
                </Box>
                
                
                
                </Box>
        
    );
}