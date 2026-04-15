import React from 'react';

const GetStarted = () => {
    return (
        <div className='py-16 md:py-40 px-6 md:px-40 lg:px-80 bg-gradient-to-r from-blue-500 to-purple-500 text-center'>
        <div className='child-left space-y-9 text-center text-white'>

        <p className='big-text text-3xl md:text-5xl font-extrabold leading-tight md:leading-18'>Ready to charge your Workflow?</p>
        <p className='small-text text-base md:text-lg leading-8 md:leading-10'>Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.Explore Products</p>

        <div className='flex flex-col sm:flex-row items-center gap-3.5 justify-center'>
        <button className='btn gap-2 px-6 py-7 text-purple-500 bg-white text-lg rounded-4xl w-full sm:w-auto'>Explore Products</button>
        <button className='btn flex px-6 py-7 text-lg text-white border border-white bg-purple-500 rounded-4xl w-full sm:w-auto'>Watch Demo</button>
        </div>
        </div>
        </div>
    );
};

export default GetStarted;