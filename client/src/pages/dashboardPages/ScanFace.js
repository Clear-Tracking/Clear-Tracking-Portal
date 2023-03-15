import React from 'react';
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { useState } from 'react';


const videoConstraints = {
    width: 360,
    height: 480,
    facingMode: "user"
};

function ScanFace() {
    const [imageSrc, setImageSrc] = useState();
    const [open, setOpen] = React.useState(true);


    let navigate = useNavigate();

    return (
        <Box>


            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
                <><div style={{ marginLeft: `${20}px`, marginTop: `${20}px`, display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end' }}>
                    <Webcam
                        style={{ padding: '20px' }}
                        audio={false}
                        height={480}
                        screenshotFormat="image/jpeg"
                        width={360}
                        videoConstraints={videoConstraints}
                    >


                        {({ getScreenshot }) => (
                            <Button
                                style={{ display: 'block', padding: '20px',fontFamily:"Poppins",fontWeight:"bold",color:"black" }}
                                onClick={() => {
                                    const imageSrc = getScreenshot();
                                    console.log(imageSrc);
                                    setImageSrc(imageSrc);
                                }}
                            >
                                Capture photo
                            </Button>
                        )}
                    </Webcam>
                    <img src={imageSrc} width={360} height={480} style={{ padding: '20px' }} />
                </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: `${40}px` }}>
                        <Button onClick={() => navigate("/matchres", { state: { img: imageSrc } })} style={{color:"black",fontFamily:"Poppins",fontWeight:"bold"}}
                        >
                            Search
                        </Button>
                    </div></>
            </Container>
       
           </Box>
                 
    )
}

export default ScanFace;