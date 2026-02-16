import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Compass, Bookmark, User, Sparkles } from 'lucide-react';

export const MobileBottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: Home, label: 'Home', path: '/', ariaLabel: 'Home' },
    { icon: Bookmark, label: 'Library', path: '/favorites', ariaLabel: 'My Library' },
    {
      icon: Sparkles,
      label: 'Magic',
      path: '/?mode=magic',
      ariaLabel: 'Magic Mode',
      isFab: true
    },
    { icon: Compass, label: 'Explore', path: '/discover', ariaLabel: 'Explore' },
    { icon: User, label: 'Profile', path: '/profile', ariaLabel: 'Profile', isPlaceholder: true },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isPlaceholder) return;

    if (item.isFab) {
      // Navigate to home and ensure Magic Mode is active
      // We'll handle the query param in CategorySelection
      navigate('/');
      // Dispatch a custom event or let the URL param handle the tab switch
      window.dispatchEvent(new CustomEvent('activate-magic-mode'));
      return;
    }

    navigate(item.path);
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border z-50 safe-area-inset-bottom pb-safe">
      <div className="flex items-end justify-around h-16 pb-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          if (item.isFab) {
            return (
              <div key={item.label} className="relative -top-5">
                <button
                  onClick={() => handleNavClick(item)}
                  className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95"
                  aria-label={item.ariaLabel}
                >
                  <Icon className="w-6 h-6" />
                </button>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-muted-foreground whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            );
          }

          return (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className={`flex flex-col items-center justify-center gap-1 min-w-[64px] transition-colors ${item.isPlaceholder ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              aria-label={item.ariaLabel}
              disabled={item.isPlaceholder}
            >
              <Icon
                className={`w-5 h-5 transition-colors ${active ? 'text-primary fill-current' : 'text-muted-foreground'
                  }`}
              />
              <span
                className={`text-[10px] transition-colors ${active ? 'text-primary font-medium' : 'text-muted-foreground'
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
