import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function UserHomePageDisplay(props) {
    return (
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", borderRadius: 3 }}>
                <img src={props.userSideCardDisplay.personpic}
                style={{ height: "10rem", width: "100%", objectFit: "cover", borderRadius: 15 }} />
            </Box>
            <Box sx={{ display: "flex", mt: 1, height: "100%" }}>
                <Typography gutterBottom variant="body1" component="div" sx={{ textAlign: "center", fontWeight: 600, fontFamily: "Poppins", fontStyle: 'normal', color: "black" }}>
                    {props.userSideCardDisplay.firstName}
                </Typography>
            </Box>
        </Box>
    )
}
