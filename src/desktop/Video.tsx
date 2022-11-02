import React from "react";

function Video() {
    const imgUrl = process.env.PUBLIC_URL;

    return (
        <>
            <video
                style={{
                    width: "100%",
                    position: "relative",
                    display: "block",
                }}
                autoPlay={true}
                muted={true}
                src={imgUrl + "/video/main-video-desktop.mp4"}
                loop
            />
        </>
    );
}

export default Video;