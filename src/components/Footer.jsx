import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-300 px-10 md:px-40 py-20 text-lg">
      <div className="grid md:grid-cols-6 gap-5">

        {/* big col */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-white mb-4">DigiTools</h2>
          <p className="text-gray-400 leading-7 max-w-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* 2nd */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>

        {/* 3rd */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        {/* 4th */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* col 5th */}
        <div>
          <h3 className="text-white font-semibold mb-4">Social Links</h3>
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-gray-200 text-black rounded-full flex items-center justify-center cursor-pointer">
              <FaFacebook></FaFacebook>
            </div>
            <div className="w-10 h-10 bg-gray-200 text-black rounded-full flex items-center justify-center cursor-pointer">
              <FaXTwitter></FaXTwitter>
            </div>
            <div className="w-10 h-10 bg-gray-200 text-black rounded-full flex items-center justify-center cursor-pointer">
              <FaInstagram></FaInstagram>
            </div>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-10"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
        <p>© 2026 Digitools. All rights reserved.</p>

        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;