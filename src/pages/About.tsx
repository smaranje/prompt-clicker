import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, Target, Clock, Sparkles } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import logo from '@/assets/logo.png';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pb-20 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <ThemeToggle />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={logo} alt="PromptCraft Logo" className="w-12 h-12" />
            <h1 className="text-4xl sm:text-5xl font-bold font-heading">
              PromptCraft
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The AI prompt generator that actually works
          </p>
        </div>

        {/* Value Propositions */}
        <div className="space-y-12 mb-16">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Stop Wasting Time on Bad Prompts</h2>
              <p className="text-muted-foreground leading-relaxed">
                We've all been there—spending minutes crafting the "perfect" prompt, only to get mediocre results. 
                PromptCraft eliminates the guesswork with proven templates that consistently deliver high-quality outputs.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Precision in Seconds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our smart search instantly finds the right template for your needs. Whether you're debugging code, 
                learning a language, or writing content—just describe what you want, and we'll get you there.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Save Hours Every Week</h2>
              <p className="text-muted-foreground leading-relaxed">
                Stop starting from scratch. Our curated templates are battle-tested and optimized for real-world use cases. 
                What used to take 10 minutes now takes 30 seconds—giving you more time to focus on what matters.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Works With Your Favorite AI</h2>
              <p className="text-muted-foreground leading-relaxed">
                ChatGPT, Claude, or any other AI tool—our prompts work everywhere. Copy, paste, and get consistently 
                better results across all platforms. No vendor lock-in, no complicated setup.
              </p>
            </div>
          </div>
        </div>

        {/* Who It's For */}
        <div className="bg-card border border-border rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Built For</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">💼</div>
              <h3 className="font-semibold mb-1">Professionals</h3>
              <p className="text-sm text-muted-foreground">Get more done in less time with optimized prompts for your workflow</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎓</div>
              <h3 className="font-semibold mb-1">Students</h3>
              <p className="text-sm text-muted-foreground">Learn faster and understand concepts better with AI assistance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎨</div>
              <h3 className="font-semibold mb-1">Creators</h3>
              <p className="text-sm text-muted-foreground">Generate ideas, content, and overcome creative blocks instantly</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            Start Using PromptCraft
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No signup required • Always free
          </p>
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
};

export default About;
