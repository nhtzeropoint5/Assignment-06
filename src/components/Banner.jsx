import React from 'react';
import bannerImg from '../assets/banner.png'
import { Play } from 'lucide-react';


const Banner = () => {
    return (

        
        <div className='py-12 md:py-20 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center justify-between gap-10'>
        <div className='child-left md:flex-2 space-y-9 text-center md:text-left'>
        <button className="btn flex items-center gap-3 px-6 md:px-9 py-6 md:py-8 bg-[#E1E7FF] rounded-4xl text-lg md:text-2xl text-purple-500 overflow-hidden">
  <div className="logo-animation">
    <div className="inner-dot"></div>
  </div>
New: AI-Powered Tools Available
</button>


        <p className='big-text text-4xl md:text-6xl lg:text-7xl font-black font-extrabold leading-tight md:leading-23'>Supercharge Your <br></br> Digital Workflow</p>
        <p className='small-text text-lg md:text-2xl text-gray-500 leading-8 md:leading-10'>Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
</p>


        <div className='flex flex-col sm:flex-row items-center gap-3.5 justify-center md:justify-start'>
        <button className='btn gap-2 px-6 py-7 bg-purple-500 text-lg text-white rounded-4xl w-full sm:w-auto'>Explore Products</button>
        <button className='btn flex px-6 py-7 items-center gap-3 text-lg border border-purple-500 text-purple-500 rounded-4xl w-full sm:w-auto'><Play></Play> Watch Demo</button>
        </div>
        </div>

        <div className='child-right md:flex-1 w-full max-w-sm md:max-w-none'>
        <img src={bannerImg} alt="" className='w-full' />
        </div>
        </div>
    );
};

export default Banner;