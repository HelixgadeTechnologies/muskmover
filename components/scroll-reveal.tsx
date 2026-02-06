"use client"

import { motion, useInView } from "framer-motion"
import { useRef, ReactNode } from "react"

interface ScrollRevealProps {
    children: ReactNode
    delay?: number
    duration?: number
    direction?: "up" | "down" | "left" | "right" | "none"
    className?: string
    once?: boolean
}

export default function ScrollReveal({
    children,
    delay = 0,
    duration = 0.6,
    direction = "up",
    className = "",
    once = true,
}: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: once,
        margin: "-20% 0px -20% 0px" // Trigger when 20% into view
    })

    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 },
    }

    const initialOffset = directions[direction]

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                ...initialOffset
            }}
            animate={isInView ? {
                opacity: 1,
                x: 0,
                y: 0,
            } : {
                opacity: 0,
                ...initialOffset
            }}
            transition={{
                duration,
                delay,
                ease: [0.25, 1, 0.5, 1], // Power4 out-like easing
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
