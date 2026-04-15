import React from 'react';
import user from '../../assets/user.png'

const BotCard = () => {
    return (
<div>
  <div className="card m-7 p-5 bg-base-100 shadow-sm relative">
    
    <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center text-sm font-semibold">
      01
    </span>

    <figure className="px-10 pt-10">
      <img src={user} alt="" />
    </figure>

    <div className="card-body items-center text-center">
      <h2 className="card-title text-2xl font-bold">Create Account</h2>
      <p className='text-lg text-gray-500 leading-8'>
        Sign up for free in seconds. No credit card required to get started.
      </p>
    </div>

  </div>
</div>
    );
};

export default BotCard;