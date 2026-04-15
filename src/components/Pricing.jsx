import React from 'react';
import PriceCard from './cards/PriceCard';

const Pricing = () => {

    const purple=true;
    return (
          <div className='py-20 px-40 text-center'>
            <h2 className='big-text text-5xl font-black font-extrabold leading-23'>Simple, Transparent Pricing</h2>
            <p className='small-text mb-14 text-2xl text-gray-500 leading-10' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, harum?</p>
            <div className="grid grid-cols-3 gap-12 m-7">
            <PriceCard purple={false} ></PriceCard>
            <PriceCard purple={true}></PriceCard>
            <PriceCard purple={false}></PriceCard>
            </div>
            </div>
    );
};

export default Pricing;