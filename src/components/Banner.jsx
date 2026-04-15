import React from 'react';
import bannerImg from '../assets/banner.png'
import { Play } from 'lucide-react';


const Banner = () => {
    return (

        
        <div className='py-20 px-40 flex items-center justify-between space-x-7'>
        <div className='child-left flex-2 space-y-9'>
        <button className="btn flex items-center gap-3 px-9 py-8 bg-[#E1E7FF] rounded-4xl text-2xl text-purple-500 overflow-hidden">
  <div className="logo-animation">
    <div className="inner-dot"></div>
  </div>
New: AI-Powered Tools Available
</button>

        
        <p className='big-text text-7xl font-black font-extrabold leading-23'>Supercharge Your <br></br> Digital Workflow</p>
        <p className='small-text text-2xl text-gray-500 leading-10'>Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
</p>


        <div className='flex items-center gap-3.5'>
        <button className='btn gap-2 px-6 py-7 bg-purple-500 text-lg text-white rounded-4xl'>Explore Products</button>
        <button className='btn flex  px-6 py-7 items-center gap-3 text-lg border border-purple-500 text-purple-500 rounded-4xl'><Play></Play> Watch Demo</button>
        </div>
        </div>

        <div className='child-right flex-1'>
        <img src={bannerImg} alt="" />
        </div>
        </div>
    );
};

export default Banner;