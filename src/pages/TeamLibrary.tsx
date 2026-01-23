import { useNavigate } from 'react-router-dom';
import { EnterpriseHeader } from '@/components/EnterpriseHeader';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Users, TrendingUp, Star, Shield } from 'lucide-react';
import { DynamicIcon } from '@/components/DynamicIcon';

// Mock team-approved templates
const teamTemplates = [
    {
        id: 'hr-policy-announcement',
        title: 'HR Policy Communication',
        description: 'Standard format for policy announcements and updates',
        icon: 'Shield',
        category: 'business',
        approved: true,
        usedBy: 234,
        author: 'HR Admin',
    },
    {
        id: 'code-review-standard',
        title: 'Code Review Guidelines',
        description: 'Approved template for providing constructive code feedback',
        icon: 'Code2',
        category: 'code',
        approved: true,
        usedBy: 187,
        author: 'Engineering Lead',
    },
    {
        id: 'client-status-update',
        title: 'Client Status Update Email',
        description: 'Professional client communication template',
        icon: 'Mail',
        category: 'business',
        approved: true,
        usedBy: 156,
        author: 'Client Success',
    },
    {
        id: 'security-incident-report',
        title: 'Security Incident Report',
        description: 'Standardized format for reporting security issues',
        icon: 'AlertTriangle',
        category: 'business',
        approved: true,
        usedBy: 98,
        author: 'Security Team',
    },
    {
        id: 'onboarding-welcome',
        title: 'New Employee Welcome',
        description: 'Standard onboarding communication for new hires',
        icon: 'Users',
        category: 'business',
        approved: true,
        usedBy: 312,
        author: 'HR Admin',
    },
];

const TeamLibrary = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background">
            <EnterpriseHeader />

            <div className="container mx autobots px-4 sm:px-6 py-8 sm:py-12 max-w-6xl">
                {/* Header */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold">Team Library</h1>
                            <p className="text-muted-foreground mt-1">
                                Approved templates for company-wide use
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <Card className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-muted-foreground">Approved</span>
                            </div>
                            <div className="text-2xl font-bold">{teamTemplates.length}</div>
                        </Card>
                        <Card className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                                <Star className="w-4 h-4 text-yellow-500" />
                                <span className="text-sm text-muted-foreground">Total Uses</span>
                            </div>
                            <div className="text-2xl font-bold">
                                {teamTemplates.reduce((sum, t) => sum + t.usedBy, 0)}
                            </div>
                        </Card>
                        <Card className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                                <TrendingUp className="w-4 h-4 text-blue-500" />
                                <span className="text-sm text-muted-foreground">This Month</span>
                            </div>
                            <div className="text-2xl font-bold">+42%</div>
                        </Card>
                    </div>
                </div>

                {/* Templates Grid */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Approved Templates</h2>
                        <Badge variant="secondary">{teamTemplates.length} templates</Badge>
                    </div>

                    <div className="grid gap-4">
                        {teamTemplates.map((template) => (
                            <Card
                                key={template.id}
                                className="p-5 hover:border-primary/50 transition-colors group cursor-pointer"
                                onClick={() => navigate(`/customize/${template.id}`)}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4 flex-1">
                                        <DynamicIcon
                                            name={template.icon}
                                            className="w-8 h-8 text-primary flex-shrink-0 mt-1"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                                    {template.title}
                                                </h3>
                                                <Badge variant="outline" className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">
                                                    <CheckCircle2 className="w-3 h-3 mr-1" />
                                                    Approved
                                                </Badge>
                                            </div>
                                            <p className="text-muted-foreground text-sm mb-3">
                                                {template.description}
                                            </p>
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Users className="w-3 h-3" />
                                                    Used by {template.usedBy} employees
                                                </span>
                                                <span>•</span>
                                                <span>Approved by {template.author}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Use Template
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamLibrary;
