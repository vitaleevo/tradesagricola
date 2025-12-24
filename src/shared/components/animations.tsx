"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface FadeInProps extends HTMLMotionProps<"div"> {
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
    children,
    direction = 'up',
    delay = 0,
    className,
    ...props
}) => {
    const directions = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 }
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer: React.FC<HTMLMotionProps<"div">> = ({
    children,
    className,
    ...props
}) => {
    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
                animate: {
                    transition: {
                        staggerChildren: 0.1
                    }
                }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const HoverScale: React.FC<HTMLMotionProps<"div">> = ({
    children,
    className,
    ...props
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};
