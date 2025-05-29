
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold text-xl">Arxcess</span>
            </div>
            
            <div className="space-y-2 text-gray-400 mb-8">
              <p>20619 Torrence Chapel Rd</p>
              <p>Suite 116 #1040</p>
              <p>Cornelius, NC 28031</p>
              <p>United States</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-400">Phone number</span>
                <p className="text-white">1-800-201-1019</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400">Email</span>
                <p className="text-white">support@arxcess.com</p>
              </div>
            </div>
          </div>

          {/* Spacer for better distribution */}
          <div className="hidden lg:block"></div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact us</a></li>
            </ul>
          </div>

          {/* Social and Legal combined */}
          <div className="space-y-8">
            {/* Social */}
            <div>
              <h3 className="text-white font-semibold mb-4">Social</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Youtube</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © 2024 Arxcess. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
