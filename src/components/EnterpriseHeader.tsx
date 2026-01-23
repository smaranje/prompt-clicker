import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Home, Compass, PlusCircle, Bookmark, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

export const EnterpriseHeader = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/discover', label: 'Discover', icon: Compass },
        { path: '/submit', label: 'Submit', icon: PlusCircle },
        { path: '/favorites', label: 'Favorites', icon: Bookmark },
    ];

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo & Brand Name */}
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
                    >
                        <img src={logo} alt="PromptCraft Logo" className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
                        <div className="flex flex-col items-start">
                            <span className="text-sm sm:text-base font-bold text-foreground leading-tight flex items-center gap-1.5">
                                PromptCraft
                                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                            </span>
                            <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                                Community
                            </span>
                        </div>
                    </button>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`
                    flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors
                    ${isActive(item.path)
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                                        }
                  `}
                                >
                                    <Icon className="w-4 h-4" />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Navigation */}
                    <div className="flex md:hidden items-center gap-2">
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

                    {/* Right Side - Theme Toggle */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
};
