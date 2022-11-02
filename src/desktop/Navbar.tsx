import React from "react";
import "./Navbar.scss";
import { FlyText, FlyIcon } from "./NavAnimation";

function Navbar() {
    const imgUrl = process.env.PUBLIC_URL;

    return (
        <>
            <nav
                className="navbar"
                style={{
                    position: "fixed",
                    width: "100%",
                    height: "12%",
                    zIndex: "1",
                }}
            >
                <img
                    style={{
                        position: "relative",
                        width: "18%",
                        verticalAlign: "middle",
                        top: "30%",
                        marginLeft: "4.5%",
                    }}
                    src={imgUrl + "/img/navbar/navbar-logo.png"}
                    alt="logo"
                />

                <div className="subtitle">
                    <FlyText text={"ABOUT"} autoPlay={false} />
                </div>
                <div className="subtitle">
                    <FlyText text={"ROADMAP"} autoPlay={false} />
                </div>
                <div className="subtitle">
                    <FlyText text={"TEAM"} autoPlay={false} />
                </div>
                <div className="subtitle">
                    <FlyText text={"GALLERY"} autoPlay={false} />
                </div>
                <div
                    className="subtitle"
                    onClick={(event) => {
                        event.preventDefault();
                        alert("coming soon");
                    }}>
                    <FlyText text={"AG STUDIO"} autoPlay={false} />
                </div> </nav>
        </>
    );
}

export default Navbar;