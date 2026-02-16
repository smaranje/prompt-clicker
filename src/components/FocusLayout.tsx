import { Outlet } from 'react-router-dom';
import { MobileBottomNav } from '@/components/MobileBottomNav';

export const FocusLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex-1 pb-20 md:pb-0">
                <Outlet />
            </main>
            <MobileBottomNav />
        </div>
    );
};
