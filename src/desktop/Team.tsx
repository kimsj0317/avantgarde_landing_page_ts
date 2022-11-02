import { CSSProperties } from "react";
import { ReactNode } from "react";
import "./text.scss"
import styles from "./Team.module.scss";
import AnimationText from "./Animation"

const imgUrl = process.env.PUBLIC_URL;

function Team() {
    return (
        <>
            <div
                style={{
                    paddingTop: "5%",
                    paddingLeft: "4%",
                    paddingRight: "3%",
                    paddingBottom: "10%",
                }}>
                <div className="title">
                    <AnimationText text="TEAM" />
                </div>
                <div
                    style={{
                        display: "grid",
                        gap: "4%",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        // marginBottom: "144rem",
                    }}>
                    {members.map((members) => {
                        const member = members;
                        return (<TeamItem key={member.name} member={member} />);
                    })}
                </div>
            </div>
        </>
    );
}

function TeamItem({ member }: { member: TeamMember }) {
    return (
        <div>
            <div
                className={styles.gradientBackground}
                style={{
                    "--gradient-start": member.backgroundGradientStartColor,
                    "--gradient-end": member.backgroundGradientEndColor,
                } as CSSProperties}>
                <div style={{
                    position: "relative",
                    paddingTop: "108%",
                    height: "0",
                    width: "100%",
                }}>
                    <img src={imgUrl + member.imageUrl}
                        style={{
                            position: "absolute",
                            top: "1.5%",
                            left: "1.5%",
                            right: "1.5%",
                            bottom: "1.5%",
                            width: "calc(100% - 3%)",
                            height: "calc(100% - 3%)",
                            textAlign: "center",
                            verticalAlign: "middle",
                        }}
                    />
                </div>
            </div>
            <div className={styles.profileName}>{member.name}</div>
            <div className={styles.profile}>{member.description}</div>
        </div>
    );
}

export default Team;

export type TeamMember = {
    imageUrl: string;
    name: string;
    description: ReactNode;
    backgroundGradientStartColor: string;
    backgroundGradientEndColor: string;
};

export const members: TeamMember[] = [
    {
        name: "Tyler Lim",
        backgroundGradientStartColor: "#B045E0",
        backgroundGradientEndColor: "#59E7EC",
        imageUrl: "/img/teamprofile/team-01.png",
        description: (
            <>
                Founder / CEO
                <ul>
                    <li>APAC Head of BD/CD at Global Stealth Company</li>
                    <li>Founder/CEO at Simple Kitchen (Exited ~USD 10M)</li>
                </ul>
            </>
        ),
    },
    {
        name: "Helen Cho",
        backgroundGradientStartColor: "#5BE5EB",
        backgroundGradientEndColor: "#CE8BB4",
        imageUrl: "/img/teamprofile/team-02.png",
        description: (
            <>
                Founder / CTO
                <ul>
                    <li>Software Engineer at Google</li>
                    <li>Technology Analyst at Morgan Stanley</li>
                    <li>Technology Analyst at Merrill Lynch</li>
                </ul>
            </>
        ),
    },
    {
        name: "Jung-woo Ha",
        backgroundGradientStartColor: "#CE8BB4",
        backgroundGradientEndColor: "#FC4238",
        imageUrl: "/img/teamprofile/team-03.png",
        description: (
            <>
                Artist
                <ul>
                    <li>Main actor of 'Along with the Gods' and 'Narco-Saints'</li>
                    <li>Actor with a cumulative 115 million+ viewers</li>
                    <li>
                        Participated in more than 30 exhibitions in Paris, LA, and Seoul as
                        a painter
                    </li>
                </ul>
            </>
        ),
    },
    {
        name: "Andrew Choi",
        backgroundGradientStartColor: "#FD4037",
        backgroundGradientEndColor: "#603FE4",
        imageUrl: "/img/teamprofile/team-04.png",
        description: (
            <>
                Advisor
                <ul>
                    <li>Founder/CEO at SuperNormal</li>
                </ul>
            </>
        ),
    },
    {
        name: "Thomas",
        backgroundGradientStartColor: "#6443E2",
        backgroundGradientEndColor: "#CEA88C",
        imageUrl: "/img/teamprofile/team-05.png",
        description: <>CSO</>,
    },
    {
        name: "JJ",
        backgroundGradientStartColor: "#CDA78D",
        backgroundGradientEndColor: "#AF45DE",
        imageUrl: "/img/teamprofile/team-06.png",
        description: <>Head of Operations</>,
    },
];
