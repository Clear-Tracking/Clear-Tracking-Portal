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

export default function UserRegisteredCard(props) {
 
    function viewProfileClicked() {
        console.log(props.id)
       
    }


    return (
        /*<Card sx={{ display: 'flex' }} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", background: "#ffffff", borderRadius: "20px",width:"80%",marginBottom:"10px",height:"30vh" }}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <img src={props.personimage}
                        style={{ borderRadius: "50%", height: "120px", width: "120px", marginTop: "50px",marginLeft:"20px" }} />
                </Box>
                <Box>
                    <div style={{ paddingTop: "40px", paddingLeft: "60px" }}>
                        <Typography gutterBottom variant="h5" style={{ fontFamily:"Poppins",fontStyle:'normal',fontWeight:"600",lineHeight:"143%",letterSpacing:"-0.03rem",color:"black" }}>{props.personfirstname + " " + props.personlastname}</Typography>
                        <span style={{ background: "#81D0DF", marginLeft: "10px", fontSize: "16px", borderRadius: "3px", padding: "8px",color:"#ffffff",fontFamily:"Poppins",fontStyle:'normal',fontWeight:"600",lineHeight:"143%",textAlign:"center" }}>Missing</span> <br />
                        <Typography variant="body2" color="text.secondary" style={{ marginTop: "20px",marginLeft:"15px", paddingBottom: "30px",fontFamily:"Poppins",fontStyle:"normal",fontWeight:"400",lineHeight:"143%",color:"#8F8F8F" }}>{"Missing Date: " + props.dateofmissing}</Typography><br />
                        <Typography variant="body2" component="div" style={{fontFamily:"Poppins",fontStyle:'normal',fontWeight:"bold",lineHeight:"143%"}}>{props.persondob}</Typography>
                        <Typography variant="h5" component="div" color={"#4CAF50"} fontWeight="bold" fontFamily={"Poppins"} fontStyle={"normal"}lineHeight="143%"letterSpacing="-0.03rem">{props.gender}</Typography><br />
                    </div>

                </Box>
            </Box>
            <Box>
                <Button variant='contained' onClick={viewProfileClicked}
                    style={{ padding: "10px", borderRadius: "22px", marginTop: "110px",marginLeft:"110px" }}>View Profile</Button>
            </Box>
        </Card>*/
        <div>
        <Box sx={{ flexGrow: 1}}>
            <Grid container
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", background: "#ffffff",marginBottom:"10px", borderRadius: "20px",width:"80%",height:"30%"}}>
                <Grid item xs={12} md={2} style={{paddingBottom:"18px"}}>
                    <center><img src={props.personimage}
                        style={{ borderRadius: "50%", height: "120px", width: "120px", marginTop: "30px" }} /></center>
                </Grid>
                <Grid item sx={6} md={6}>
                    <div style={{ paddingTop: "9%" }}>
                        <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"Poppins",fontStyle:'normal',fontWeight:"600",lineHeight:"143%",letterSpacing:"-0.03rem",color:"black"}}>
                        {props.personfirstname +" "+ props.personlastname}
                        </Typography>
                        <span style={{ background: "#81D0DF", marginLeft: "10px", fontSize: "16px", borderRadius: "3px", padding: "8px",color:"#ffffff",fontFamily:"Poppins",fontStyle:'normal',fontWeight:"600",lineHeight:"143%",textAlign:"center" }}> MISSING</span>
                        <Typography variant="body1" color="text.secondary" style={{ marginTop: "20px",marginLeft:"10px",fontFamily:"Poppins",fontStyle:"normal",fontWeight:"400",lineHeight:"143%",color:"#8F8F8F" }}>
                        {"Missing Date "+ props.dateofmissing}
                        </Typography>
                        <Typography variant="body1" component="div" style={{fontFamily:"Poppins",marginLeft:"10px",fontStyle:'normal',fontWeight:"400",lineHeight:"143%",color:"#8F8F8F"}}>
                        {"Date of birth:"+props.persondob}
                        </Typography>
                        <Typography variant="h5" component="div" color={"#4CAF50"} marginLeft="10px" fontWeight="bold" fontFamily={"Poppins"} fontStyle={"normal"}lineHeight="143%"letterSpacing="-0.03rem">
                        {props.gender}
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={6} md={3}>
                    <div >
                    <Button variant='contained' onClick={viewProfileClicked}
                    style={{ padding: "10px", borderRadius: "22px", marginTop: "80px",marginLeft:"110px" }}>View Profile</Button>
                    </div>
                </Grid>

            </Grid>
        </Box>
    </div>
    );
}