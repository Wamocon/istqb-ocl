"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    animation?: "fade-up" | "fade-in" | "scale-up" | "slide-left" | "slide-right";
    duration?: number;
    delay?: number;
    viewport?: { once?: boolean; margin?: string; amount?: number | "some" | "all" };
    className?: string;
    width?: "fit-content" | "100%";
}

const animations = {
    "fade-up": {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    },
    "fade-in": {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    "scale-up": {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
    "slide-left": {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
};

export function ScrollReveal({
    children,
    animation = "fade-up",
    duration = 0.5,
    delay = 0,
    viewport = { once: true, margin: "0px 0px -50px 0px" },
    className = "",
    width = "fit-content",
}: ScrollRevealProps) {
    const shouldReduceMotion = useReducedMotion();
    const selectedAnimation = animations[animation];

    const variants = {
        hidden: shouldReduceMotion ? { opacity: 0 } : selectedAnimation.hidden,
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: {
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom spring-like easing
            },
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className={className}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
}
