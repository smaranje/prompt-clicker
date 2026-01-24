import * as PhosphorIcons from 'phosphor-react';

interface DynamicIconProps {
    name: string;
    className?: string;
    size?: number;
    weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
}

export const DynamicIcon = ({ name, className, size = 24, weight = 'regular' }: DynamicIconProps) => {
    const IconComponent = (PhosphorIcons as any)[name];

    if (!IconComponent) {
        // Fallback to Question icon if not found
        return <PhosphorIcons.Question className={className} size={size} weight={weight} />;
    }

    return <IconComponent className={className} size={size} weight={weight} />;
};
