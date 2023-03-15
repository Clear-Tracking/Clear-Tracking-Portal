import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import { shadows } from '@mui/system';



export default function CardJustNowPolice(props) {
    return (
        <div>
            <Box className="CardCasesPolice_display" component={Grid} boxShadow = {"rgba(0, 0, 0, 0.35) 0px 5px 15px"} style={{ background:"#ffffff", borderRadius:"20px", maxWidth:"390px"}}>
            <center><img src={props.personimage}
                style={{borderRadius:"50%", height:"150px", width:"150px", marginTop:"30px"}}/></center>
            <Typography gutterBottom variant="h5" component="div" textAlign="center" fontWeight="600" fontFamily={"Poppins"} fontStyle={"normal"}lineHeight="143%"letterSpacing="-0.03rem">
            {props.personfirstname + " "+ props.personlastname}
                  </Typography>
                  <center><span style={{ background: "#81D0DF",borderRadius: "3px", padding: "8px", color:"#ffffff",fontFamily:"Poppins",fontStyle:"normal",fontWeight:"600",lineHeight:"143%" }}> {props.gender}</span></center>
                  <Typography variant="body2" color="text.secondary" textAlign="center" style={{marginTop:"20px", paddingBottom:"30px",fontFamily:"Poppins",fontStyle:"normal",fontWeight:"400",lineHeight:"143%",color:"#8F8F8F"}}>
                  {"Missing Since " + props.dateofmissing}
                  </Typography>
    
            </Box>
        </div>
      )
    }
    