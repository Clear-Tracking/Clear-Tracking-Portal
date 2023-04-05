import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { lineHeight } from '@mui/system';
import {datediff} from "../util"

export default function UserLeads(props) {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container
                    sx={{ boxShadow: "0px 2px 0px -1px rgba(0,0,0,0.2), 0px 4px 0px -1px rgba(0,0,0,0.14), 0px 1px 0px -1px rgba(0,0,0,0.12)",border: "1px solid #0077ff", background: "#ffffff", borderRadius: "20px", padding: "1rem" }}>
                    {/* <Grid item xs={2}>
                        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}>
                            <img src={props.missingpersonimage}
                            style={{ borderRadius: "50%", height: "80px", width: "80px" }} />
                        </Box>
                    </Grid> */}
                    <Grid item xs={9}>
                        <Box sx={{display:"flex",justifyContent:"center",ml:1,height:"100%",flexDirection:"column"}}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Poppins", fontStyle: 'normal', fontWeight: 600,  color: "black" }}>
                                {props.missingpersonfirstname + " " + props.missingpersonlastname}
                            </Typography>
                        
                            <Typography variant="body1" sx={{ mt:1,fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400 }}>
                               Message: bjcakscugfwgduiiw kehfnikchuwqhqi82y djhsdrkisgedks 
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={3} sx={{ borderLeft: "1px solid #BEBEBE" }}>
                        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",flexDirection:"column"}} >
                            <Typography gutterBottom variant="body1" component="div" textAlign="center" sx={{ fontFamily: "Poppins", fontStyle: 'normal', fontWeight: "bold" }}>
                                 {/* Age: {datediff(props.missingdob)} */} Time: 16:30:25

                            </Typography>
                            <Typography gutterBottom variant="body1" component="div" textAlign="center" color={"#4CAF50"} fontWeight="bold" fontFamily={"Poppins"} fontStyle={"normal"}>
                                {/* {props.missingpersongender} */} 17th June 2023.
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}
