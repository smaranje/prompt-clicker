import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { House, Compass, PlusCircle, Bookmark } from 'phosphor-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

export const EnterpriseHeader = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { path: '/', label: 'Home', icon: House },
        { path: '/discover', label: 'Discover', icon: Compass },
        { path: '/submit', label: 'Submit', icon: PlusCircle },
        { path: '/favorites', label: 'Favorites', icon: Bookmark },
    ];

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <header className="bg-card/50 backdrop-blur-sm sticky top-0 z-50 shadow-none">
            <div className="container mx-auto px-4 py-5">
                <div className="relative flex items-center justify-between h-10">
                    {/* Left Side: Logo */}
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
                        >
                            {/* Hand-Drawn Doodle Logo (SVG) */}
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 relative -mb-1 group-hover:rotate-3 transition-transform duration-300">
                                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                                    {/* Offset Blue Scribble Background */}
                                    <path
                                        d="M30 35 C35 30, 80 25, 85 40 C95 75, 75 85, 45 80 C25 75, 20 45, 30 35 Z"
                                        className="stroke-primary/50"
                                        strokeWidth="2"
                                    />

                                    {/* Marker Style 'P' */}
                                    <path
                                        d="M35 25 V85 M35 30 C35 30, 80 20, 80 50 C80 80, 45 75, 35 65"
                                        className="stroke-foreground"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    {/* Sparkles */}
                                    <path
                                        d="M85 20 L85 30 M80 25 L90 25"
                                        className="stroke-primary"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                                PromptCraft
                            </span>
                        </button>
                    </div>

                    {/* Center: Desktop Navigation */}
                    <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`
                    flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors
                    ${isActive(item.path)
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                                        }
                  `}
                                >
                                    <Icon className="w-4 h-4" weight={isActive(item.path) ? "fill" : "regular"} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Side: Mobile Nav & Theme Toggle */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {/* Mobile Navigation */}
                        <div className="flex md:hidden items-center gap-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Button
                                        key={item.path}
                                        variant={isActive(item.path) ? "default" : "ghost"}
                                        size="icon"
                                        onClick={() => navigate(item.path)}
                                        className="h-9 w-9"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </Button>
                                );
                            })}
                        </div>

                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
};
