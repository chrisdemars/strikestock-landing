
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Wall Street, meet Silicon Valley
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque eum modi excepturi magnam explicabo nihil molestias fugit. Odit, eaque.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="outline" size="lg" className="text-gray-900 border-brand-accent bg-brand-accent hover:text-brand-accent hover:bg-brand-dark text-lg px-8 py-4">
              Start Free Trial
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-accent mb-2">10,000+</div>
              <div className="text-gray-300">Active Traders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-accent mb-2">$2.5B+</div>
              <div className="text-gray-300">Trades Executed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-accent mb-2">99.9%</div>
              <div className="text-gray-300">Platform Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
