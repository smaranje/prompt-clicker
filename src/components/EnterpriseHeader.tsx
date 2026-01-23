import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Building2, Home, Users, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const EnterpriseHeader = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/team-library', label: 'Team Library', icon: Users },
        { path: '/favorites', label: 'Favorites', icon: Bookmark },
    ];

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo & Company Name */}
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
                    >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-sm sm:text-base font-semibold text-foreground leading-tight">
                                Acme Corp
                            </span>
                            <span className="text-xs text-muted-foreground leading-tight">
                                Prompt Portal
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
