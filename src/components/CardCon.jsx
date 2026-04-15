import React from 'react';
import BotCard from './cards/BotCard';

const CardCon = () => {
    return (
        <div className='py-20 px-40 text-center bg-base-200'>
            <h2 className='big-text text-5xl font-black font-extrabold leading-23'>Get Started</h2>
            <p className='small-text text-2xl text-gray-500 leading-10 py-4' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, harum?</p>
            <div className="grid grid-cols-3">
            <BotCard></BotCard>
            <BotCard></BotCard>
            <BotCard></BotCard>
            </div>


            
        </div>
    );
};

export default CardCon;