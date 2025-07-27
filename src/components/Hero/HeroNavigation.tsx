import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ArrowDown, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroNavigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Apply background when scrolled more than 5% of viewport height
      const scrollThreshold = window.innerHeight * 0.05;
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
      scrolled ? 'bg-[#a8a6a6ad]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-white font-semibold text-xl">Arxcess</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex bg-[#0000004d] backdrop-blur-sm rounded-full px-[11px] py-[9px] flex space-x-1">
          <Link to="/" className="text-white bg-white/20 hover:bg-white/30 rounded-full px-[.85rem] py-[.45rem] transition duration-300 font-medium">Home</Link>
          <Link to="/about" className="text-white hover:bg-white/20 rounded-full px-[.85rem] py-[.45rem] transition duration-300 font-medium">About</Link>
          <a href="#project" className="text-white hover:bg-white/20 rounded-full px-[.85rem] py-[.45rem] transition duration-300 font-medium">Project</a>
          <div className="relative group">
            <a href="#pages" className="text-white hover:bg-white/20 rounded-full px-6 py-2 transition duration-300 flex items-center font-medium group">
              Pages 
              <ArrowDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:hidden" />
              <ArrowUp className="ml-1 w-4 h-4 transition-transform duration-200 hidden group-hover:block" />
            </a>
            {/* Dropdown (hidden by default, shown on hover) */}
            <div className="absolute hidden group-hover:block group-focus-within:block bg-gray-900/40 backdrop-blur-sm mt-0 pt-2 rounded-xl shadow-2xl min-w-[180px] z-50">
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl py-2">
                <a href="#news" className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">News</a>
                <a href="#style-guide" className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">Style Guide</a>
                <a href="#licensing" className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">Licensing</a>
                <a href="#changelog" className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">Changelog</a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Contact Button */}
        <Button
          className="hidden md:flex bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-semibold px-6 py-2 rounded-full uppercase text-sm tracking-wider"
        >
          CONTACT US
        </Button>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900/95 backdrop-blur-md border-gray-800">
            <div className="flex flex-col space-y-6 mt-8">
              <Link to="/" className="text-white text-lg font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white text-lg font-medium hover:text-primary transition-colors">
                About
              </Link>
              <a href="#project" className="text-white text-lg font-medium hover:text-primary transition-colors">
                Project
              </a>
              <div className="space-y-4">
                <span className="text-white text-lg font-medium">Pages
                  <ArrowDown></ArrowDown>
                </span>
                <div className="pl-4 space-y-3">
                  <a href="#news" className="block text-gray-300 hover:text-white transition-colors">
                    News
                  </a>
                  <a href="#style-guide" className="block text-gray-300 hover:text-white transition-colors">
                    Style Guide
                  </a>
                  <a href="#licensing" className="block text-gray-300 hover:text-white transition-colors">
                    Licensing
                  </a>
                  <a href="#changelog" className="block text-gray-300 hover:text-white transition-colors">
                    Changelog
                  </a>
                </div>
              </div>
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-semibold px-6 py-3 rounded-full uppercase text-sm tracking-wider mt-6">
                CONTACT US
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default HeroNavigation;