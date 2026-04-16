import React from 'react';
import BotCard from './cards/BotCard';

const CardCon = () => {
    return (
        <div className='py-12 md:py-20 px-6 md:px-40 text-center bg-base-200'>
            <h2 className='big-text text-3xl md:text-5xl font-black font-extrabold leading-tight md:leading-23'>Get Started</h2>
            <p className='small-text text-lg md:text-2xl text-gray-500 leading-8 md:leading-10 py-4' >Start using premium digital tools in minutes, not hours.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <BotCard></BotCard>
            <BotCard></BotCard>
            <BotCard></BotCard>
            </div>


            
        </div>
    );
};

export default CardCon;