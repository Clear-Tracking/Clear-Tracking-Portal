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

export default function UserRegisteredCard(props) {

    const navigate = useNavigate();
    
    
  const viewProfileClicked = () => navigate('/dashboard/firdetails/'+props.perid)

    return (
        
            <Box sx={{ flexGrow: 1, display:"flex",alignItems: "center",flexDirection:"column",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"100%",borderRadius:2,padding:2 }}>
                
                    
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                            <img src={props.personimage}
                                style={{ borderRadius: "50%", height: "120px", width: "120px" }} />
                        </Box>
                    
                    
                        <Box sx={{ display: "flex", justifyContent: "center",mt:1, height: "100%", flexDirection: "column" }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Poppins", fontStyle: 'normal', fontWeight: 600, color: "black" }}>
                                {props.personfirstname + " " + props.personlastname}
                            </Typography>
                            <Typography variant="body1" sx={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400 }}>
                                {"Missing Date: " + props.dateofmissing}
                            </Typography>
                        </Box>
                    
                    
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", flexDirection: "column" }} >
                            <Typography gutterBottom variant="body1" component="div" textAlign="center" sx={{ fontFamily: "Poppins", fontStyle: 'normal', fontWeight: 400 }}>
                                {"Date of Birth: " +props.persondob}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" textAlign="center" color={"#4CAF50"} fontWeight="bold" fontFamily={"Poppins"} fontStyle={"normal"}>
                                {props.gender}
                            </Typography>
                            <Button variant='contained'  onClick={viewProfileClicked} autoFocus style={{ padding: "10px", borderRadius: "10px" }}>View Profile</Button>
                        </Box>
                    

                
            </Box>
        
    );
}