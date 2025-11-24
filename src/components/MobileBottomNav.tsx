import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, Bookmark, Info } from 'lucide-react';

export const MobileBottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: Home, label: 'Home', path: '/', ariaLabel: 'Home' },
    { icon: Search, label: 'Search', path: '/', ariaLabel: 'Search templates' },
    { icon: Bookmark, label: 'Saved', path: '/favorites', ariaLabel: 'Saved prompts' },
    { icon: Info, label: 'About', path: '/about', ariaLabel: 'About' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 safe-area-inset-bottom">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center justify-center gap-1 min-w-[44px] min-h-[44px] px-3 transition-colors"
              aria-label={item.ariaLabel}
            >
              <Icon 
                className={`w-5 h-5 transition-colors ${
                  active ? 'text-primary' : 'text-muted-foreground'
                }`} 
              />
              <span 
                className={`text-xs transition-colors ${
                  active ? 'text-primary font-medium' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
