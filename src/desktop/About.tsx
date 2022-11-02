import React from "react";
import AnimaitonText from "./Animation";
import "./text.scss";

function About() {
    return (
        <>
            <div
                style={{
                    paddingTop: "3%",
                    paddingLeft: "4%",
                    paddingRight: "5%",
                    paddingBottom: "5%",
                }}
            >
                <div className="title" id="about">
                    <AnimaitonText text="ABOUT" />
                </div>
                <div className="text">
                    <AnimaitonText text="// THE COLLECTION" />
                </div>
                <div className="example">
                    We are proud to present the Ha Jung Woo x SuperNormal collection, a limited edition
                    line of PFP NFTs inspired by the work of renowned Korean artist Ha Jung Woo. The collection
                    was generated with more than 500 unique wearable items, each curated with Ha Jung Woo's
                    signature style. With only 1,978 NFTs available, this collection offers a rare opportunity to
                    own a unique piece of art that has the touch of both Ha Jung Woo and SuperNormal.
                </div>
                <div className="text">
                    <AnimaitonText text="// THE ART CONCEPT" />
                </div>
                <div className="example">
                    This collection features the unique style of Ha Jung Woo's artwork in the form of
                    NFTs that embodiesthe beauty and diversity SuperNormal stands for.
                </div>
                <div className="text">
                    <AnimaitonText text="// THE VISION & VALUE" />
                </div>
                <div className="example">
                    NFT technology is a cutting-edge tool that allows digital assets to transcend their
                    limitations by providing proof of ownership. We aim to take it a step further by developing
                    a simple process that allows the holders of this collection to wear the PFPs in the metaverses
                    they love. Stay tuned for updates!
                </div>
            </div>
        </>
    );
}

export default About;