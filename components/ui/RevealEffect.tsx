"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = {
    children: JSX.Element,
};

const RevealEffect = ({ children }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    //   const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            //   slideControls.start("visible");
        }
    }, [isInView, mainControls]);
    return (
        <div ref={ref} className="relative z-20 w-full">
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 75,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                    },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>

            {/* <motion.div
                variants={{
                    hidden: {
                        left: 0,
                    },
                    visible: {
                        left: "100%",
                    },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    backgroundColor: "white",
                    zIndex: 20,
                }}
            /> */}
        </div>
    );
};

export default RevealEffect;
