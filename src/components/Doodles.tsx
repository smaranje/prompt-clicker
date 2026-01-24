import React from 'react';

interface DoodleProps {
    className?: string;
}

// Helper for consistent stroke style
const strokeStyle = {
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 2,
};

// 1. Light Bulb (Ideas/Inspiration)
export const DoodleBulb: React.FC<DoodleProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Glass Bulb - messy oval */}
        <path
            stroke="currentColor"
            {...strokeStyle}
            d="M30 40C30 15 70 15 70 40C70 55 60 60 55 70L45 70C40 60 30 55 30 40Z"
        />
        {/* Filament - messy squiggle */}
        <path
            d="M40 40 L45 30 L55 30 L60 40"
            stroke="currentColor"
            {...strokeStyle}
        />
        {/* Base - zig zag */}
        <path
            d="M45 70 L45 75 L55 75 L55 70"
            stroke="currentColor"
            {...strokeStyle}
        />
        <path
            d="M47 78 L53 78"
            stroke="currentColor"
            {...strokeStyle}
            strokeWidth={3}
        />
        {/* Rays - Electric Blue Accents */}
        <path d="M20 20 L25 25" className="stroke-blue-500" {...strokeStyle} />
        <path d="M50 10 L50 18" className="stroke-blue-500" {...strokeStyle} />
        <path d="M80 20 L75 25" className="stroke-blue-500" {...strokeStyle} />
    </svg>
);

// 2. Magic Wand (Magic Mode)
export const DoodleWand: React.FC<DoodleProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Wand Stick */}
        <path
            d="M20 80 L40 60"
            stroke="currentColor"
            {...strokeStyle}
            strokeWidth={3}
        />
        {/* Star - messy */}
        <path
            d="M40 60 L45 35 L55 55 L75 50 L60 65 L70 85 L50 70 L35 80 L45 60"
            stroke="currentColor"
            {...strokeStyle}
        />
        {/* Sparkles - Electric Blue */}
        <path d="M70 30 L75 35 M72 32 L78 28" className="stroke-blue-500" {...strokeStyle} />
        <path d="M85 50 L90 55" className="stroke-blue-500" {...strokeStyle} />
        <path d="M25 40 L30 45" className="stroke-blue-500" {...strokeStyle} />
    </svg>
);

// 3. Gears (Studio Mode/Engineering)
export const DoodleGears: React.FC<DoodleProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Big Gear */}
        <circle cx="40" cy="60" r="20" stroke="currentColor" {...strokeStyle} />
        <path d="M40 40 L40 35 M40 80 L40 85 M20 60 L15 60 M60 60 L65 60" stroke="currentColor" {...strokeStyle} />
        {/* Small Gear */}
        <circle cx="70" cy="30" r="15" stroke="currentColor" {...strokeStyle} />
        <path d="M70 15 L70 10 M70 45 L70 50 M55 30 L50 30 M85 30 L90 30" stroke="currentColor" {...strokeStyle} />
        {/* Connection/Accent - Electric Blue */}
        <path d="M55 45 L60 50" className="stroke-blue-500" strokeWidth={1} {...strokeStyle} />
        <circle cx="40" cy="60" r="5" className="fill-blue-500/20 stroke-blue-500" />
    </svg>
);

// 4. Rocket (Prompt Comparison/Launch)
export const DoodleRocket: React.FC<DoodleProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Body */}
        <path
            d="M30 70 Q30 30 50 10 Q70 30 70 70 L30 70"
            stroke="currentColor"
            {...strokeStyle}
        />
        {/* Fins */}
        <path d="M30 70 L20 85 L35 70" stroke="currentColor" {...strokeStyle} />
        <path d="M70 70 L80 85 L65 70" stroke="currentColor" {...strokeStyle} />
        {/* Window */}
        <circle cx="50" cy="40" r="8" stroke="currentColor" {...strokeStyle} />
        {/* Flames - Electric Blue */}
        <path
            d="M40 75 Q50 90 60 75"
            className="stroke-blue-500"
            fill="none"
            {...strokeStyle}
        />
        <path
            d="M45 75 Q50 85 55 75"
            className="stroke-blue-500"
            fill="none"
            {...strokeStyle}
        />
    </svg>
);

// 5. Optimization Arrow (Chaos to Clarity)
export const DoodleOptimization: React.FC<DoodleProps> = ({ className }) => (
    <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Scribble (Chaos) */}
        <path
            d="M10 50 Q20 20 30 50 Q40 80 50 50 Q60 20 70 60 Q80 40 90 50"
            stroke="currentColor"
            {...strokeStyle}
            strokeDasharray="3 2"
        />
        {/* Transition Line */}
        <path
            d="M90 50 C110 50, 130 50, 150 50"
            stroke="currentColor"
            {...strokeStyle}
        />
        {/* Arrow Head (Clarity) - Electric Blue Accent */}
        <path
            d="M140 40 L160 50 L140 60"
            className="stroke-blue-500"
            strokeWidth={3}
            strokeLinecap="round"
            // strokeLinejoin="round" 
            fill="none"
        />
    </svg>
);

// 6. Chat Cursor (AI Interaction)
export const DoodleChat: React.FC<DoodleProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Chat Bubble */}
        <path
            d="M15 30 C15 20 25 20 50 20 C75 20 85 20 85 30 V60 C85 70 75 70 50 70 H30 L15 80 V30 Z"
            stroke="currentColor"
            {...strokeStyle}
        />
        {/* Prompt Cursor >_ */}
        <path
            d="M30 40 L40 50 L30 60"
            className="stroke-blue-500"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M45 60 H55"
            className="stroke-blue-500"
            strokeWidth={3}
            strokeLinecap="round"
        />
    </svg>
);
