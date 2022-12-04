import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import styles from "./camera.module.scss";

const Camera = () => {
    const webcamRef = useRef(null);
    const [url, setUrl] = useState(null);
    const videoConstraints = {
        width: 390,
        height: 897,
        facingMode: "user",
    };
    const capturePhoto = useCallback(async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc);
    }, [webcamRef]);
    const onUserMedia = (e) => {
        console.log(e);
    };
    return (
        <div className={styles.container}>
            <div className="h-full">
                <Webcam
                    videoConstraints={videoConstraints}
                    ref={webcamRef}
                    audio={true}
                    screenshotFormat="image/jpeg"
                    onUserMedia={onUserMedia}
                    mirrored={true}
                />
            </div>
        </div>
    );
};

export default Camera;
