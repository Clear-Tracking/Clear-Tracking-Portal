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
import { scanFaceResult } from '../../store/dashboardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setMatchResults } from '../../store/dashboardSlice';
import { CircularProgress } from '@mui/material';
import { REQUEST_STATUS_IDLE, REQUEST_STATUS_LOADING, REQUEST_STATUS_SUCCEEDED } from '../../constants/Constants';
import { setRequestStatus } from '../../store/dashboardSlice';

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
    const dashboardState = useSelector((state) => state.dashboard);

    let navigate = useNavigate();
    const matchFace = () => {
        //navigate("/dashboard/matches", { state: { img: imageSrc } })
        dispatch(setRequestStatus(REQUEST_STATUS_LOADING))
        fetch(`${process.env.REACT_APP_ML_URL}/api/validate`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Accept": "*/*",
                'Access-Control-Allow-Origin': "*",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "image": imageSrc })
        })
            .then(res => res.json())
            .then(res => {
                dispatch(setRequestStatus(REQUEST_STATUS_SUCCEEDED))
                if (res.data.length > 0) {
                    var scanAadharIdentities = res.data.map((item) => item.identity.slice(6, 18));
                    console.log(scanAadharIdentities);
                    let apiString = []
                    console.log(scanAadharIdentities.length);
                    for (let i = 0; i < scanAadharIdentities.length; i++) {
                        apiString.push("&filters[aadhar][$in][" + i + "]=" + scanAadharIdentities[i])
                        console.log(apiString)
                    }
                    let finalVal = apiString.join("")
                    console.log(finalVal)
                    dispatch(scanFaceResult({ scanfaceAadhar: finalVal, count: 25 }));
                    navigate("/dashboard/matches")
                }
                dispatch(setRequestStatus(REQUEST_STATUS_IDLE))

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
                                    startIcon={<CameraAltIcon />}
                                >
                                    Capture
                                </Button>
                            )}
                        </Webcam>
                        <img src={imageSrc} width={480} height={480} style={{ padding: '20px', border: "1px solid black" }} />
                    </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: `${40}px` }}>
                            <Button variant="contained" color="warning" sx={{ width: "20vw" }} onClick={matchFace}
                            >
                                {
                                    dashboardState.requestStatus === REQUEST_STATUS_LOADING?
                                    (<Box><CircularProgress size="1rem"/></Box>):
                                    "Search"
                                }
                                
                            </Button>
                        </div></>
                </Container>

            </Box>

        </>

    )
}

export default ScanFace;
