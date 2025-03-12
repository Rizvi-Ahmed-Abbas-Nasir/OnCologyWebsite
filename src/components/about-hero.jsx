import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiOutlineSetting, AiOutlineTool, AiOutlineCar } from "react-icons/ai";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const iconRefs = [useRef(null), useRef(null), useRef(null)];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Animate title letters
        const letters = titleRef.current.querySelectorAll(".letter");
        tl.from(letters, { opacity: 0, y: 100, stagger: 0.03, duration: 0.8 });

        // Animate subtitle
        tl.from(subtitleRef.current, { opacity: 0, y: 50, duration: 0.8 }, "-=0.5");

        // Animate icons
        iconRefs.forEach((icon, index) => {
            tl.from(icon.current, {
                opacity: 0,
                scale: 0,
                duration: 0.6,
                delay: index * 0.2,
                ease: "back.out(1.7)",
            });
        });

        // Animate rotating gears
        gsap.to(".rotating-gear", { rotation: 360, duration: 20, repeat: -1, ease: "none" });
        gsap.to(".reverse-rotating-gear", { rotation: -360, duration: 25, repeat: -1, ease: "none" });
    }, []);

    return (
        <section ref={containerRef} className="about-hero">
            <div className="background-pattern"></div>

            {/* Animated gears */}
            <div className="gear rotating-gear"></div>
            <div className="gear reverse-rotating-gear"></div>

            <div className="content">
                <h1 ref={titleRef} className="title">
                    {"About Us".split("").map((char, i) => (
                        <span key={i} className="letter">
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>
                <p ref={subtitleRef} className="subtitle">
                    We specialize in top-quality machinery and services.
                </p>

                <div className="icons">
                    <div ref={iconRefs[0]} className="icon">
                        <AiOutlineSetting size={50} />
                    </div>
                    <div ref={iconRefs[1]} className="icon">
                        <AiOutlineTool size={50} />
                    </div>
                    <div ref={iconRefs[2]} className="icon">
                        <AiOutlineCar size={50} />
                    </div>
                </div>
            </div>
        </section>
    );
}
