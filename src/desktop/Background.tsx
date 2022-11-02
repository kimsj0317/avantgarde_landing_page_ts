import React from "react";
import About from './About';
import Gallery from "./Gallery";
import Roadmap from './Roadmap';
import Team from "./Team";

function Background() {
    return (
        <>
            <img
                style={{
                    width: "100%",
                    display: "block",
                    position: "absolute",
                    zIndex: "-1",
                }}
                src={process.env.PUBLIC_URL + "/img/bg/desktop-bg.png"} alt="background" />
            <About />
            <Roadmap />
            <Team />
            <Gallery />
        </>
    );
}

export default Background;