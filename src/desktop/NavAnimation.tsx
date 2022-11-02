import { ReactNode } from "react";
import { motion } from "framer-motion";

const Wrapper = (props: any) => {
    return (
        <span className="word-wrapper">
            {props.children}
        </span>
    );
};

const topItem = {
    topStart: {
        x: 0,
        y: 0,
    },
    topEnd: {
        x: 0,
        y: "-100%",
    },
};

const bottomItem = {
    bottomStart: {
        x: "-100%",
        y: "100%",
        rotate: -90,
    },
    bottomEnd: {
        x: 0,
        y: 0,
        rotate: 0,
    },
};

export const FlyText = (props: { text: string, autoPlay: boolean }) => {
    const words = props.text.split("").map((x) => {
        if (x === " ") {
            return "\u00A0";
        }
        return x;
    });

    return (
        <motion.span
            initial={["bottomStart", "topStart"]}
            animate={props.autoPlay ? ["bottomStart", "topStart"] : void 0} // autoPlay의 값에 따라
            transition={{
                staggerChildren: 0.05,
            }}
            whileHover={["bottomEnd", "topEnd"]}
        >
            <Wrapper>
                {words.map((word, index) => {
                    return (
                        <span
                            style={{
                                overflowY: "hidden",
                                overflowX: "hidden",
                                display: "inline-block",
                                position: "relative",
                            }}
                            key={index}
                        >
                            <motion.span
                                style={{ display: "inline-block" }}
                                variants={topItem}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.065,
                                    ease: [0, 0.2, 0.3, 1],
                                }}
                            >
                                {word}
                            </motion.span>
                            <motion.span
                                style={{
                                    display: "inline-block",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                }}
                                variants={bottomItem}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.065,
                                    ease: [0, 0.2, 0.3, 1],
                                }}
                            >
                                {word}
                            </motion.span>
                        </span>
                    );
                })}
            </Wrapper>
        </motion.span>
    );
};

export default FlyText;

export function FlyIcon({ children }: { children: ReactNode }) {
    return (
        <motion.span
            initial={["bottomStart", "topStart"]}
            whileHover={["bottomEnd", "topEnd"]}
            style={{
                overflowY: "hidden",
                overflowX: "visible",
                display: "inline-block",
                position: "relative",
            }}
        >
            <motion.span
                style={{ display: "inline-block" }}
                variants={topItem}
                transition={{
                    duration: 0.4,
                    ease: [0, 0.2, 0.3, 1],
                }}
            >
                {children}
            </motion.span>
            <motion.span
                style={{
                    display: "inline-block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
                variants={bottomItem}
                transition={{
                    duration: 0.4,
                    ease: [0, 0.2, 0.3, 1],
                }}
            >
                {children}
            </motion.span>
        </motion.span>
    );
}

// export function FlyIcon(children) {
//     return (
//         <motion.span
//             initial={["bottomStart", "topStart"]}
//             whileHover={["bottomEnd", "topEnd"]}
//             style={{
//                 overflowY: "hidden",
//                 overflowX: "visible",
//                 display: "inline-block",
//                 position: "relative",
//             }}
//         >
//             <motion.span
//                 style={{ display: "inline-block" }}
//                 variants={topItem}
//                 transition={{
//                     duration: 0.4,
//                     ease: [0, 0.2, 0.3, 1],
//                 }}
//             >
//                 {children}
//             </motion.span>
//             <motion.span
//                 style={{
//                     display: "inline-block",
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                 }}
//                 variants={bottomItem}
//                 transition={{
//                     duration: 0.4,
//                     ease: [0, 0.2, 0.3, 1],
//                 }}
//             >
//                 {children}
//             </motion.span>
//         </motion.span>
//     );
// }
