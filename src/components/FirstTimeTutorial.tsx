import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FirstTimeTutorial = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('promptcraft_tutorial_seen');
    if (!hasSeenTutorial) {
      setTimeout(() => setIsVisible(true), 500);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('promptcraft_tutorial_seen', 'true');
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleClose();
    }
  };

  const steps = [
    {
      title: 'Welcome to PromptCraft',
      description: 'Get perfect AI results in 30 seconds with battle-tested prompt templates.',
    },
    {
      title: 'Search or Browse',
      description: 'Type what you need in the search box, or browse by category below.',
    },
    {
      title: 'Pick a Template',
      description: 'Choose from hundreds of expert prompts. Each one is optimized for the best results.',
    },
    {
      title: 'Copy and Use',
      description: 'Customize if needed, then copy your prompt and paste it into ChatGPT or Claude.',
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-card border border-border rounded-lg max-w-md w-full p-6 shadow-lg animate-scale-in">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">{steps[step].title}</h2>
            <p className="text-muted-foreground text-sm">{steps[step].description}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="ml-2 flex-shrink-0"
            aria-label="Close tutorial"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2 mb-4">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                index === step ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={handleClose} className="flex-1">
            Skip
          </Button>
          <Button onClick={handleNext} className="flex-1">
            {step === steps.length - 1 ? 'Get Started' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};
