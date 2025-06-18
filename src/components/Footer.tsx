
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Copyright and Legal */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">StockStrike AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional trading platform for modern investors.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>© 2025 StockStrike AI. All rights reserved.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-brand-accent transition-colors">Legal</a>
              </div>
            </div>
          </div>

          {/* Secondary Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-brand-accent transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-brand-accent transition-colors">Pricing</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand-accent transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-accent transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-accent transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400  focus:border-brand-accent"
                />
                <button className="px-4 py-2 text-gray-900 border-brand-accent bg-brand-accent hover:text-brand-accent hover:bg-brand-dark rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
