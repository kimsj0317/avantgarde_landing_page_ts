import React from "react";
import "./text.scss";
import AnimaitonText from "./Animation";


function Roadmap() {
    const imgUrl = process.env.PUBLIC_URL;
    return (
        <>
            <div
                style={{
                    paddingTop: "4%",
                    paddingLeft: "4%",
                    paddingRight: "5%",
                    paddingBottom: "6%",
                }}>
                <div className="title">
                    <AnimaitonText text="ROADMAP" />
                </div>
                <div className="roadmap">
                    <img
                        // style={{
                        //     height: "100%",
                        //     position: "relative",
                        //     overflow: "hidden",
                        //     cursor: "pointer",
                        // }}
                        style={{
                            width: "25%",
                            marginTop: "3%",
                        }}
                        src={imgUrl + "/img/roadmap/roadmap_1_pc.jpg"} alt="roadmap_1" />
                    <img
                        style={{
                            width: "25%",
                            marginTop: "3%",
                        }}
                        src={imgUrl + "/img/roadmap/roadmap_2_pc.jpg"} alt="roadmap_2" />
                    <img
                        style={{
                            width: "25%",
                            marginTop: "3%",
                        }}
                        src={imgUrl + "/img/roadmap/roadmap_3_pc.jpg"} alt="roadmap_3" />
                    <img
                        style={{
                            width: "25%",
                            marginTop: "3%",
                        }}
                        src={imgUrl + "/img/roadmap/roadmap_4_pc.jpg"} alt="roadmap_4" />
                </div>
            </div>
        </>
    );
}

export default Roadmap;