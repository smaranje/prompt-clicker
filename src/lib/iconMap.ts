// Lucide to Phosphor icon name mappings
// This helps maintain compatibility when migrating
export const iconMap: Record<string, string> = {
    // Common icons
    'Heart': 'Heart',
    'Star': 'Star',
    'Check': 'Check',
    'X': 'X',
    'Plus': 'Plus',
    'Minus': 'Minus',

    // Arrows
    'ArrowRight': 'ArrowRight',
    'Arrow Left': 'ArrowLeft',
    'ArrowUp': 'ArrowUp',
    'ArrowDown': 'ArrowDown',
    'ChevronRight': 'CaretRight',
    'ChevronLeft': 'CaretLeft',
    'ChevronDown': 'CaretDown',
    'ChevronUp': 'CaretUp',

    // Communication
    'Mail': 'EnvelopeSimple',
    'Send': 'PaperPlaneRight',
    'MessageCircle': 'ChatCircle',
    'MessageSquare': 'Chat',
    'Phone': 'Phone',

    // Files & Documents
    'FileText': 'FileText',
    'File': 'File',
    'Folder': 'Folder',
    'Copy': 'Copy',
    'Clipboard': 'Clipboard',
    'ClipboardList': 'ClipboardText',

    // Interface
    'Menu': 'List',
    'Search': 'MagnifyingGlass',
    'Settings': 'Gear',
    'Filter': 'Funnel',
    'Grid': 'GridFour',
    'Layout': 'Layout',
    'Sparkles': 'Sparkle',

    // Status & Feedback
    'CheckCircle2': 'CheckCircle',
    'AlertCircle': 'Warning',
    'Info': 'Info',
    'HelpCircle': 'Question',
    'Loader2': 'CircleNotch',
    'Ghost': 'Ghost',

    // Actions
    'Trash': 'Trash',
    'Edit': 'PencilSimple',
    'Download': 'DownloadSimple',
    'Upload': 'UploadSimple',
    'Share2': 'ShareNetwork',
    'ExternalLink': 'ArrowSquareOut',

    // Business & Work
    'Briefcase': 'Briefcase',
    'Calendar': 'Calendar',
    'Clock': 'Clock',
    'User': 'User',
    'Users': 'Users',
    'Building': 'Buildings',

    // Creative & Media
    'Image': 'Image',
    'Video': 'Video',
    'Music': 'MusicNote',
    'Camera': 'Camera',
    'Mic': 'Microphone',

    // Code & Tech
    'Code': 'Code',
    'Code2': 'CodeBlock',
    'Terminal': 'Terminal',
    'Bug': 'Bug',
    'Database': 'Database',
    'Cpu': 'Cpu',

    // Social
    'Twitter': 'TwitterLogo',
    'Facebook': 'FacebookLogo',
    'Instagram': 'InstagramLogo',
    'Linkedin': 'LinkedinLogo',
    'Youtube': 'YoutubeLogo',
    'Github': 'GithubLogo',

    // Misc
    'Tag': 'Tag',
    'Bookmark': 'Bookmark',
    'Lock': 'Lock',
    'Eye': 'Eye',
    'EyeOff': 'EyeSlash',
    'TrendingUp': 'TrendUp',
    'Flame': ' Fire',
    'Gem': 'Diamond',
    'Zap': 'Lightning',
    'Trophy': 'Trophy',
    'Headphones': 'Headphones',
    'PenTool': 'Pen',
    'Smartphone': 'DeviceMobile',
    'Presentation': 'PresentationChart',
    'DollarSign': 'CurrencyDollar',
    'RefreshCw': 'ArrowsClockwise',
};

export const getLucideEquivalent = (phosphorName: string): string => {
    const entry = Object.entries(iconMap).find(([_, p]) => p === phosphorName);
    return entry ? entry[0] : phosphorName;
};

export const getPhosphorName = (lucideName: string): string => {
    return iconMap[lucideName] || lucideName;
};
