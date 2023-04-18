import React from 'react';
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import UserRegisteredMissingProfile from '../../Components/UserRegisteredMissingProfile';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useState } from 'react';
import { scanFaceResult } from '../../store/policeDashboardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setMatchResults } from '../../store/policeDashboardSlice';

const videoConstraints = {
    width: 480,
    height: 480,
    facingMode: "user"
};

function ScanFace() {
    const [imageSrc, setImageSrc] = useState("/user.jpg");
    const [open, setOpen] = React.useState(true);

// Redux State
const dispatch = useDispatch();
const policeDashboardState = useSelector((state) => state.policeDashboard);

    let navigate = useNavigate();
		const matchFace = () => {
		 //navigate("/dashboard/matches", { state: { img: imageSrc } })
		 			fetch("http://localhost:3500/api/validate", {
						method: 'POST', 
						mode: 'cors',
								headers:{
								    "Accept" : "*/*",
								    'Access-Control-Allow-Origin': "*",
								    'Content-Type': 'application/json'
								},
						body: JSON.stringify({"image":imageSrc}) 
					})
						.then(res=>res.json())
						.then(res=> {   
                            if(res.data.length>0){
                            var scanAadharIdentities = res.data.map((item)=>item.identity.slice(6,-4));
                            console.log(scanAadharIdentities);
                            
                                dispatch(scanFaceResult({ scanfaceAadhar: scanAadharIdentities, count: 1 }));
                                navigate("/dashboard/matches")
                  
                            }

                        }
                        )
                        
		 }
    return (
        <>
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
                        <Button variant="contained" color="warning" sx={{width:"20vw"}} onClick={matchFace} 
                        >
                            Search
                        </Button>
                    </div></>
            </Container>
       
           </Box>
            
           </>
                 
    )
}

export default ScanFace;
