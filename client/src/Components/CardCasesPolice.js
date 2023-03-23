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
                    sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", background: "#ffffff", borderRadius: "20px", padding: "1rem" }}>
                    <Grid item xs={12} md={2}>
                        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}>
                            <img src={props.missingpersonimage}
                            style={{ borderRadius: "50%", height: "120px", width: "120px" }} />
                        </Box>
                    </Grid>
                    <Grid item xs={9} md={7}>
                        <Box sx={{display:"flex",justifyContent:"center",ml:1,height:"100%",flexDirection:"column"}}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Poppins", fontStyle: 'normal', fontWeight: 600,  color: "black" }}>
                                {props.missingpersonfirstname + " " + props.missingpersonlastname}
                            </Typography>
                        <Box> <Button variant="contained" sx={{background:"#81D0DF"}} disableRipple disableFocusRipple disableTouchRipple disableElevation>Missing</Button></Box>  
                            <Typography variant="body1" sx={{ mt:1,fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400 }}>
                                {"Missing Date " + props.missingpersondom}
                                <span style={{paddingLeft:"30px"}}>Missing since: {datediff(props.missingpersondom)}</span>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={3} md={3} sx={{ borderLeft: "1px solid #BEBEBE" }}>
                        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",flexDirection:"column"}} >
                            <Typography gutterBottom variant="h5" component="div" textAlign="center" sx={{ fontFamily: "Poppins", fontStyle: 'normal', fontWeight: "bold" }}>
                                 Age: {datediff(props.missingdob)}

                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" textAlign="center" color={"#4CAF50"} fontWeight="bold" fontFamily={"Poppins"} fontStyle={"normal"}>
                                {props.missingpersongender}
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}
