"use client";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ParallaxScroll = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        // container: gridRef, // remove this if your container is not fixed height
        offset: ["start start", "end start"], // remove this if your container is not fixed height
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -2900]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 1000]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -2900]);

    const third = Math.ceil(images.length / 3);

    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    useEffect(() => {
        gsap.fromTo(
            gridRef.current,
            { scale: 0.96 }, 
            {
                scaleX: 1,
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top center", // When the top of the container hits the center of the viewport
                    end: "center center", // When the top of the container hits the top of the viewport
                    scrub: true, // Smoothly animate as the user scrolls
                },
                onComplete: () => {
                    gsap.fromTo(
                        gridRef.current,
                        { scale: 1 },
                        {
                            scaleX: 0.96,
                            scrollTrigger: {
                                trigger: gridRef.current,
                                start: "center center", // When the center of the container hits the bottom of the viewport
                                end: "bottom top", // When the bottom of the container hits the top of the viewport
                                scrub: true, // Smoothly animate as the user scrolls
                            },
                        }
                    );
                },
            }
        );
    }, []);
    return (
        <div
            className={cn(
                "h-svh md:h-[100svh] xl:h-[175svh] items-start overflow-y-auto w-screen overflow-hidden",
                className
            )}
            ref={gridRef}
        >
            <div
                className="w-full h-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-start  max-w5xl mx-auto gap-3 md:gap-5  pb-10"
                ref={gridRef}
            >
                <div className="grid gap-3 md:gap-5">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }}
                            key={"grid-1" + idx}
                        >
                            <Image
                                src={el}
                                className="h-auto w-full object-contain object-right-top rounded-none gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-3 md:gap-5 -mt-[40%]">
                    {secondPart.map((el, idx) => (
                        <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                            <Image
                                src={el}
                                className="h-auto w-full object-cover object-left-top rounded-none gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-3 md:gap-5">
                    {thirdPart.map((el, idx) => (
                        <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                            <Image
                                src={el}
                                className="h-auto w-full object-contain object-left-top rounded-none gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};