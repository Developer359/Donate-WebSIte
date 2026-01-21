import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 px-2 w-full h-auto">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row flex-wrap gap-20 max-sm:gap-10 justify-between items-start">
        
        <div>
          <h2 className="text-[#F39C12] font-bold text-lg">Reach Beyond</h2>
          <h1 className="text-5xl font-black mb-4">HOPE</h1>
          <p className="text-gray-300 text-sm leading-relaxed w-70">
            Providing care, dignity, and support to communities through compassion and service.
          </p>
        </div>
    
    <div className='max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-center max-sm:justify-start gap-20 max-sm:gap-10'>
        <div>
          <h3 className="text-[#F39C12] font-bold text-sm uppercase mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Campaigns</a></li>
            <li><a href="#" className="hover:text-white">Gallery</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-[#F39C12] font-bold text-sm uppercase mb-4">Get Involved</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Donate</a></li>
            <li><a href="#" className="hover:text-white">Volunteer</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-[#F39C12] font-bold text-sm uppercase mb-4">Contact Info</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <i className="ri-mail-fill text-[#F39C12]"></i>
              <span>Reachbeyondhope@Gmail.Com</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-phone-fill text-[#F39C12]"></i>
              <span>817-247-7825</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-map-pin-2-fill text-[#F39C12]"></i>
              <span>Address</span>
            </div>
          </div>
          
        </div>

      </div>
    </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 mt-10 pt-8 text-center">
        <p className="text-xs text-white">© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;