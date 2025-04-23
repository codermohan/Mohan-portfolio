
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
          Hello, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          A passionate developer crafting beautiful digital experiences
        </p>
        <Button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary hover:bg-primary/90 text-white animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          Get in touch <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
