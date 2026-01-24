import { Variants } from 'framer-motion';

// Page Transitions
export const pageTransition: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

export const pageTransitionConfig = {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
};

// Stagger Children (for lists)
export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
};

export const staggerItem: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    }
};

// Card Hover
export const cardHover = {
    rest: { scale: 1, y: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" },
    hover: {
        scale: 1.02,
        y: -4,
        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
        transition: { duration: 0.2, ease: "easeOut" }
    }
};

// Button Interactions
export const buttonTap = {
    whileTap: { scale: 0.95 },
    whileHover: { scale: 1.05 }
};

export const iconRotate: Variants = {
    rest: { rotate: 0 },
    hover: { rotate: 360, transition: { duration: 0.6, ease: "easeInOut" } }
};

// Loading Skeleton
export const skeletonPulse = {
    animate: {
        opacity: [0.5, 0.8, 0.5],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

// Fade In Up
export const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
};

// Scale In
export const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    }
};

// Cascade (for sequential reveals)
export const cascadeContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

export const cascadeItem: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    }
};

// Counter Animation (for numbers)
export const counterVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "backOut" }
    }
};

// Heart Pulse
export const heartPulse = {
    scale: [1, 1.2, 1],
    transition: { duration: 0.3, ease: "easeInOut" }
};

// Copy Success
export const copySuccess: Variants = {
    initial: { scale: 1 },
    copied: {
        scale: [1, 1.1, 1],
        transition: { duration: 0.3, ease: "easeInOut" }
    }
};
