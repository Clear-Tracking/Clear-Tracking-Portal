import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function CardCasesPolice() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container
                    style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", background: "#ffffff", borderRadius: "20px"}}>
                    <Grid item xs={12} md={2} style={{paddingBottom:"18px"}}>
                        <center><img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                            style={{ borderRadius: "50%", height: "120px", width: "120px", marginTop: "30px" }} /></center>
                    </Grid>
                    <Grid item sx={6} md={6}>
                        <div style={{ paddingTop: "9%" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Charlie Puth
                                <span style={{ background: "#1976d2", marginLeft: "30px", fontSize: "1.2rem", borderRadius: "3px", padding: "3px" }}> Missing</span>
                            </Typography>

                            <Typography variant="body2" color="text.secondary" style={{ marginTop: "20px", paddingBottom: "30px" }}>
                                Missing Date
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={3} style={{ borderLeft: "2px solid #BEBEBE"}}>
                        <div style={{ paddingTop: "12%", paddingLeft:"20px"}} >
                            <Typography gutterBottom variant="h4" component="div">
                                Age 22
                            </Typography>

                            <Typography gutterBottom variant="h5" component="div" color={"green"} fontWeight="bold">
                                Male
                            </Typography>
                        </div>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}
