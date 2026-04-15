import React from 'react';

const BannerBot = () => {
    return (
        <div className='py-16 px-40 bg-gradient-to-r from-blue-500 to-purple-500'>
        
            <div className="flex items-center text-white">
  <div className="flex-1 text-center px-6 space-y-4">
    <h2 className="text-5xl font-bold">50K+</h2>
    <p className="text-lg">Active Users</p>
  </div>

  
  <div className="w-px h-30 bg-white/40"></div>

  <div className="flex-1 text-center px-6 space-y-4">
    <h2 className="text-5xl font-bold">200+</h2>
    <p className="text-lg">Premium Tools</p>
  </div>


  <div className="w-px h-30 bg-white/40"></div>

  <div className="flex-1 text-center px-6 space-y-4">
    <h2 className="text-5xl font-bold">4.9</h2>
    <p className="text-lg">Rating</p>
  </div>
</div>
            </div>
            
    );
};

export default BannerBot;