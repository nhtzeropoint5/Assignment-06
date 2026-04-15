import React from 'react';

const PriceCard = ({purple}) => {
    return (
        <div className={`card ${purple ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-base-100'} shadow-sm`}>
  <div className="card-body relative">

    {
        purple &&   <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge badge-lg badge-warning">Most Popular</span>
    }
  

<div className='text-left flex flex-col'><h2 className="text-3xl font-bold ">Premium</h2>
     <p className={`text-lg ${purple ? `text-white` : ` text-gray-400`} leading-8`}>habijabi habijabi</p>
</div>
    <div className="flex justify-between">
     
      <span className = {`text-xl ${purple ? `text-white` : ` text-gray-400`}`} ><span className='text-4xl font-bold text-black'>$29</span>/mo</span>
    </div>


    <ul className="mt-6 flex flex-col gap-2 text-lg text-left">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI-driven image enhancements</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Seamless cloud integration</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Real-time collaboration tools</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className={`btn ${purple && `bg-white text-purple-600 border-0`} btn-primary btn-block text-lg rounded-4xl py-5 px-8`}>Subscribe</button>
    </div>
  </div>
</div>
    );
};

export default PriceCard;