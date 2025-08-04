
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import IntPropSection from '@/components/IntPropSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <IntPropSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
