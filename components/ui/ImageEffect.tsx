"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";
import { Parallax } from "react-scroll-parallax";

type Props = {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
};

gsap.registerPlugin(ScrollTrigger);

const ImageEffect = ({ src, alt, width, height, className }: Props) => {
    return (
        <div className="w-full h-full relative overflow-hidden inline-block">
            <div className="lg:block hidden">
                <Parallax speed={-10}>
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        className={`${className} w-full h-full object-cover`}
                    />
                </Parallax>
            </div>
            <div className="block lg:hidden">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={`${className} w-full h-full object-cover`}
                />
            </div>
        </div>
    );
};

export default ImageEffect;
