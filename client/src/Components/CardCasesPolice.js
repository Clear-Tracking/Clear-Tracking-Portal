import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { lineHeight } from '@mui/system';
import {datediff} from "../util"

export default function CardCasesPolice(props) {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container
                    style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", background: "#ffffff", borderRadius: "20px"}}>
                    <Grid item xs={12} md={2} style={{paddingBottom:"18px"}}>
                        <center><img src={props.missingpersonimage}
                            style={{ borderRadius: "50%", height: "120px", width: "120px", marginTop: "30px" }} /></center>
                    </Grid>
                    <Grid item sx={6} md={6}>
                        <div style={{ paddingTop: "9%" }}>
                            <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"Poppins",fontStyle:'normal',fontWeight:"600",lineHeight:"143%",letterSpacing:"-0.03rem",color:"black"}}>
                            {props.missingpersonfirstname +" "+ props.missingpersonlastname}
                            </Typography>
                            <span style={{ background: "#81D0DF", marginLeft: "10px", fontSize: "16px", borderRadius: "3px", padding: "8px",color:"#ffffff",fontFamily:"Poppins",fontStyle:'normal',fontWeight:"600",lineHeight:"143%",textAlign:"center" }}> MISSING</span>
                            <Typography variant="body2" color="text.secondary" style={{ marginTop: "20px",marginLeft:"15px", paddingBottom: "30px",fontFamily:"Poppins",fontStyle:"normal",fontWeight:"400",lineHeight:"143%",color:"#8F8F8F" }}>
                            {"Missing Date "+ props.missingpersondom}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={3} style={{ borderLeft: "2px solid #BEBEBE"}}>
                        <div style={{ paddingTop: "15%",marginLeft:"30px"}} >
                            <Typography gutterBottom variant="h4" component="div" style={{fontFamily:"Poppins",fontStyle:'normal',fontWeight:"bold",lineHeight:"143%"}}>
                                Age {datediff("8-3-2023","missingdays")}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" color={"#4CAF50"} fontWeight="bold" fontFamily={"Poppins"} fontStyle={"normal"}lineHeight="143%"letterSpacing="-0.03rem">
                            {props.missingpersongender}
                            </Typography>
                        </div>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}
