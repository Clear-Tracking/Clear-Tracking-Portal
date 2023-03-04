import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import { Box } from '@mui/system';

export default function CardJustNowPolice() {
    return (
        <div>
            <Box className="CardCasesPolice_display" style={{maxWidth:"390px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", background:"#ffffff", borderRadius:"20px"}}>
            <center><img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                style={{borderRadius:"50%", height:"150px", width:"150px", marginTop:"30px"}}/></center>
            <Typography gutterBottom variant="h5" component="div" textAlign="center">
                  Charlie Puth
                  </Typography>
                  <center><span style={{ background: "#1976d2", fontSize: "1.1rem", borderRadius: "3px", padding: "7px", color:"#ffffff" }}> MALE</span></center>
                  <Typography variant="body2" color="text.secondary" textAlign="center" style={{marginTop:"20px", paddingBottom:"30px"}}>
                    Missing Date
                  </Typography>
    
            </Box>
        </div>
      )
    }
    