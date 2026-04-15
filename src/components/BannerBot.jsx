import React from 'react';

const BannerBot = () => {
    return (
        <div className='py-12 md:py-16 px-6 md:px-40 bg-gradient-to-r from-blue-500 to-purple-500'>

            <div className="flex flex-col md:flex-row items-center text-white gap-8 md:gap-0">
  <div className="flex-1 text-center px-6 space-y-4">
    <h2 className="text-4xl md:text-5xl font-bold">50K+</h2>
    <p className="text-lg">Active Users</p>
  </div>


  <div className="hidden md:block w-px h-30 bg-white/40"></div>
  <div className="md:hidden w-full h-px bg-white/40"></div>

  <div className="flex-1 text-center px-6 space-y-4">
    <h2 className="text-4xl md:text-5xl font-bold">200+</h2>
    <p className="text-lg">Premium Tools</p>
  </div>


  <div className="hidden md:block w-px h-30 bg-white/40"></div>
  <div className="md:hidden w-full h-px bg-white/40"></div>

  <div className="flex-1 text-center px-6 space-y-4">
    <h2 className="text-4xl md:text-5xl font-bold">4.9</h2>
    <p className="text-lg">Rating</p>
  </div>
</div>
            </div>
            
    );
};

export default BannerBot;