
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-dark text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-24 h-16 flex items-center justify-center">
              <img
                src="/ss-logo.png" // Replace with the actual path to your logo
                alt="StockStrike AI Logo"
                className="w-full h-full object-contain"
              />
            </div>
            {/* <span className="text-xl font-bold">StockStrike AI</span> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-brand-accent transition-colors">Features</a>
            <a href="#pricing" className="hover:text-brand-accent transition-colors">Pricing</a>
            <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
            <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
          </nav>

          {/* Login/Logout Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:block border-brand-accent text-gray-900 hover:bg-brand-accent hover:text-white">
              Login
            </Button>
            <Button variant="outline" className="hidden md:block text-gray-900 border-brand-accent bg-brand-accent hover:text-brand-accent hover:bg-brand-dark">
              Sign Up
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="hover:text-brand-accent transition-colors">Features</a>
              <a href="#pricing" className="hover:text-brand-accent transition-colors">Pricing</a>
              <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
              <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-800">
                <Button variant="outline" className="border-brand-accent text-gray-900 hover:bg-brand-accent hover:text-white">
                  Login
                </Button>
                <Button className="text-gray-900 bg-brand-accent hover:text-brand-accent hover:bg-brand-dark hover:border-brand-accent">
                  Sign Up
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
