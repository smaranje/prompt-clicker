import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface DynamicIconProps extends Omit<LucideProps, 'ref'> {
    name: string;
}

export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
    const IconComponent = (LucideIcons as any)[name];

    if (!IconComponent) {
        // Fallback to HelpCircle if icon not found
        return <LucideIcons.HelpCircle {...props} />;
    }

    return <IconComponent {...props} />;
};
