import React, { ReactNode } from "react";
import "./text.scss";
import AnimaitonText from "./Animation";
import styles from "./Roadmap.module.scss";

type SlideItem = {
    description: string;
    content: ReactNode;
    imageUrl: string;
    disabled?: boolean;
};

export const roadmapSlideItems: SlideItem[] = [
    {
        description: "Interoperability & Integration",
        content: (
            <>
                <h3>Interoperability &amp; Integration</h3>
                <p>
                    We are committed to providing interoperability for the collection by
                    allowing them to be integrated into anywhere our holders have an
                    online presence.
                </p>
                <h4>Web 3.0 Metaverses</h4>
                <ol>
                    <li>
                        The Sandbox <span className={styles.chip}>complete</span>
                    </li>
                    <li>
                        Decentraland <span className={styles.chip}>complete</span>
                    </li>
                    <li>
                        Roblox{" "}
                        <span className={styles.chip} data-secondary>
                            2023/Q1
                        </span>
                    </li>
                    <li>
                        Zepeto{" "}
                        <span className={styles.chip} data-secondary>
                            2023/Q1
                        </span>
                    </li>
                    <li>
                        ifland{" "}
                        <span className={styles.chip} data-secondary>
                            2023/Q1
                        </span>
                    </li>
                </ol>
                <h4>Online Games</h4>
                <p>
                    User favorite Web 2.0 &amp; 3.0 games{" "}
                    <span className={styles.chip} data-secondary>
                        2023
                    </span>
                </p>
            </>
        ),
        imageUrl: "/roadmap/roadmap_1_pc.jpg",
    },
    {
        description: "Launchpad",
        content: (
            <>
                <h3>Launchpad</h3>
                <p>
                    We aim to provide a hassle-free experience for both collectors and
                    artists alike. Our launchpad will be offering a secure minting
                    platform for our projects and participating artists.
                </p>
                <ol>
                    <li>
                        <strong>
                            Phase 1 <span className={styles.chip}>complete</span>
                        </strong>{" "}
                        : The platform is ready to securely mint our collections to the
                        users. Detailed information such as composition and rarity of the
                        NFTs will be available to view.
                    </li>
                    <li>
                        <strong>
                            Phase 2{" "}
                            <span className={styles.chip} data-secondary>
                                2022/Q4
                            </span>
                        </strong>{" "}
                        : We will be providing an artist-friendly launchpad that allows them
                        to mint their own NFTs without the technical hurdle.
                    </li>
                </ol>
                <p
                    style={{
                        color: "transparent",
                        textShadow: "0 0 10px rgba(255,255,255,0.8)",
                        userSelect: "none",
                    }}
                >
                    kSEguLX7ePCY 51f +pg CUl c5Gf lU R ZTj6rvY WoW3i7 RFpRJe 0lisHOBbfuAg
                    Qun2 Wuhm 7uMyjcR 2OrUH8YBQ dVeJzxcr tblGR Jk 41b iWEsCST L1DC rVn K5
                    dP7V dSgiGq
                </p>
                <p
                    style={{
                        color: "transparent",
                        textShadow: "0 0 10px rgba(255,255,255,0.8)",
                        userSelect: "none",
                    }}
                >
                    ZXR+EcFTt Kpn7cn Q2QxLHZhg3 o15 J/wjy xwa0IZ4 iOtHw 7si4Ha7 F3VfEIT9Jg
                    D7cZH HHtVS1cqZkX OtHw 7si4Ha7 F3VfEIT9Jg D7cZH HHtVS1cqZkX
                </p>
            </>
        ),
        imageUrl: "/roadmap/roadmap_2_pc.jpg",
    },
    {
        description: "Holder Benefits",
        content: (
            <>
                <h3>Holder Benefits</h3>
                <p>
                    In addition to gaining exclusive access to airdrops and priority sales
                    of our upcoming projects, holders of our collection will be able to
                    profit from secondary sales of the wearable assets included in the
                    PFPs in each of the supported metaverses and platforms.
                </p>
                <p
                    style={{
                        color: "transparent",
                        textShadow: "0 0 10px rgba(255,255,255,0.8)",
                        userSelect: "none",
                    }}
                >
                    kSEguLX7ePCY 51f +pg CUl c5Gf lU R ZTj6rvY WoW3i7 RFpRJe 0lisHOBbfuAg
                    Qun2 Wuhm 7uMyjcR 2OrUH8YBQ dVeJzxcr tblGR Jk 41b iWEsCST L1DC rVn K5
                    dP7V dSgiGq
                </p>
                <p
                    style={{
                        color: "transparent",
                        textShadow: "0 0 10px rgba(255,255,255,0.8)",
                        userSelect: "none",
                    }}
                >
                    ZXR+EcFTt Kpn7cn Q2QxLHZhg3 o15 J/wjy xwa0IZ4 iOtHw 7si4Ha7 F3VfEIT9Jg
                    D7cZH HHtVS1cqZkX OtHw 7si4Ha7 F3VfEIT9Jg D7cZH HHtVS1cqZkX
                </p>
                <p
                    style={{
                        color: "transparent",
                        textShadow: "0 0 10px rgba(255,255,255,0.8)",
                        userSelect: "none",
                    }}
                >
                    2OrUH8YBQ dVeJzxcr tblGR Jk 41b iWEsCST L1DC rVn K5 dP7V dSgiGq
                    kSEguLX7ePCY 51f +pg CUl RFpRJe 0lisHOBbfuAg Qun2 Wuhm 7uMyjcR
                </p>
                <p
                    style={{
                        color: "transparent",
                        textShadow: "0 0 10px rgba(255,255,255,0.8)",
                        userSelect: "none",
                    }}
                >
                    J/wjy xwa0IZ4 iOtHw 7si4Ha7 F3VfEIT9Jg HHtVS1cqZkX ZXR+EcFTt Kpn7cn
                    Q2QxLHZhg3 o15 Qun2 Wuhm 7uMyjcR 2OrUH8YBQ dVeJzxcr tblGR Jk 41b
                    iWEsCST L1DC rVn K5
                </p>
            </>
        ),
        imageUrl: "/roadmap/roadmap_3_pc.jpg",
    },
    {
        description: "Coming Soon",
        content: (
            <>
                <h3>02 // Vision &amp; Value</h3>
                <p>
                    Avant Garde Studio aims to become the Louis Vuitton of the digital
                    fashion industry through its exclusive technology and attractive
                    ecosystem.
                </p>
            </>
        ),
        imageUrl: "/roadmap/roadmap_4_pc.jpg",
        disabled: true,
    },
];

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