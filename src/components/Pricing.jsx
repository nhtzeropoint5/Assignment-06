import React from 'react';
import PriceCard from './cards/PriceCard';

const Pricing = () => {

    const purple=true;
    return (
          <div className='py-12 md:py-20 px-6 md:px-40 text-center'>
            <h2 className='big-text text-3xl md:text-5xl font-black font-extrabold leading-tight md:leading-23'>Simple, Transparent Pricing</h2>
            <p className='small-text mb-8 md:mb-14 text-lg md:text-2xl text-gray-500 leading-8 md:leading-10' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, harum?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 m-2 md:m-7">
            <PriceCard purple={false} ></PriceCard>
            <PriceCard purple={true}></PriceCard>
            <PriceCard purple={false}></PriceCard>
            </div>
            </div>
    );
};

export default Pricing;