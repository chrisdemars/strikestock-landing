
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-brand-dark text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Stock Market Charts"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-brand-dark/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Master the
            <span className="text-brand-accent"> Stock Market</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
            They build ai to take your money. We build ai to take it back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" variant="outline" className="text-gray-900 border-brand-accent bg-brand-accent hover:text-brand-accent hover:bg-brand-dark text-lg px-8 py-3">
              Start Trading Now
            </Button>

          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-brand-accent rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/2 right-10 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;
