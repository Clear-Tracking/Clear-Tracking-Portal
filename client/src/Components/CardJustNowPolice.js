import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import { Box } from '@mui/system';

export default function CardJustNowPolice(props) {
    return (
        <div>
            <Box className="CardCasesPolice_display" style={{maxWidth:"390px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", background:"#ffffff", borderRadius:"20px"}}>
            <center><img src={props.personimage}
                style={{borderRadius:"50%", height:"150px", width:"150px", marginTop:"30px"}}/></center>
            <Typography gutterBottom variant="h5" component="div" textAlign="center">
                  {props.personfirstname + " "+ props.personlastname}
                  </Typography>
                  <center><span style={{ background: "#1976d2", fontSize: "1.1rem", borderRadius: "3px", padding: "7px", color:"#ffffff" }}> {props.gender}</span></center>
                  <Typography variant="body2" color="text.secondary" textAlign="center" style={{marginTop:"20px", paddingBottom:"30px"}}>
                    {"Missing Since " + props.dateofmissing}
                  </Typography>
    
            </Box>
        </div>
      )
    }
    