import React from 'react';
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useState } from 'react';


const videoConstraints = {
    width: 480,
    height: 480,
    facingMode: "user"
};

function ScanFace() {
    const [imageSrc, setImageSrc] = useState("/user.jpg");
    const [open, setOpen] = React.useState(true);


    let navigate = useNavigate();

    return (
        <Box>


            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
                <><div style={{ marginTop: `${20}px`, display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end' }}>
                    <Webcam
                        style={{ padding: '20px' }}
                        audio={false}
                        height={480}
                        screenshotFormat="image/jpeg"
                        width={480}
                        videoConstraints={videoConstraints}
                    >


                        {({ getScreenshot }) => (
                            <Button variant="contained"
                                onClick={() => {
                                    const imageSrc = getScreenshot();
                                    console.log(imageSrc);
                                    setImageSrc(imageSrc);
                                }}
                                startIcon={<CameraAltIcon/>}
                            >
                                Capture
                            </Button>
                        )}
                    </Webcam>
                    <img src={imageSrc} width={480} height={480} style={{ padding: '20px',border:"1px solid black" }} />
                </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: `${40}px` }}>
                        <Button variant="contained" color="warning" sx={{width:"20vw"}} onClick={() => navigate("/dashboard/matches", { state: { img: imageSrc } })} 
                        >
                            Search
                        </Button>
                    </div></>
            </Container>
       
           </Box>
                 
    )
}

export default ScanFace;