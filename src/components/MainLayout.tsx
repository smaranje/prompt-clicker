import { Outlet } from 'react-router-dom';
import { EnterpriseHeader } from '@/components/EnterpriseHeader';
import { MobileBottomNav } from '@/components/MobileBottomNav';

export const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <EnterpriseHeader />

            <main className="flex-1 pb-20 md:pb-0">
                <Outlet />
            </main>

            <MobileBottomNav />
        </div>
    );
};
