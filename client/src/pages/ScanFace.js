import React from 'react';
import Webcam from "react-webcam";
import { useState } from 'react';

const videoConstraints = {
    width: 720,
    height: 480,
    facingMode: "user"
};

function WebcamCapture() {
const [imageSrc, setImageSrc] = useState();
    return (
        <div>
            <Webcam
                audio={false}
                height={720}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            >
                {({ getScreenshot }) => (
                    <button
                        onClick={() => {
                            const imageSrc = getScreenshot()
                            console.log(imageSrc);
                            setImageSrc(imageSrc);
                        }}
                    >
                        Capture photo
                    </button>
                )}
            </Webcam>
            <img src={imageSrc} />
        </div>
    )
}

export default WebcamCapture;