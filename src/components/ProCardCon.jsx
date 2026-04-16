import React, { use } from 'react';
import { useState } from "react";
import AvailableProducts from './productToggle/AvailableProducts';
import SelectedProducts from './productToggle/SelectedProducts';


const ProCardCon = ({promise, totalCart, setTotalCart, selectedProduct, setSelectedProduct}) => {

  const promiseVanga = use(promise);
  const [active, setActive] = useState("products");
  
 

    return (
        <div className='py-12 md:py-16 px-6 md:px-40 text-center'>
        <p className='big-text text-3xl md:text-5xl font-extrabold leading-tight md:leading-18'>Premium Digital Tools</p>
        <p className='small-text text-base md:text-lg leading-8 md:leading-10'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        

        <div className="bg-gray-100 p-2 rounded-full w-fit mx-auto flex items-center mt-8 md:mt-14">
      <button
        onClick={() => setActive("products")} className={`px-6 py-3 rounded-full text-lg font-semibold transition-all ${
          active === "products"
            ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md"
            : "text-gray-700"
        }`}
      >
        Products
      </button>

      <button
        onClick={() => setActive("cart")}
        className={`px-6 py-3 rounded-full text-lg font-semibold transition-all ${
          active === "cart"
            ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md"
            : "text-gray-700"
        }`}
      >
        Cart ({selectedProduct.length})
      </button>

    </div>

        {/* setCoin = {setCoin} coin={coin} setSPlayer={setSPlayer} selectedPlayer={sPlayer}
        selectedPlayer={sPlayer} setSPlayer={setSPlayer} setCoin = {setCoin} coin={coin} */}


    {
                active === 'products'
                    ? <AvailableProducts products={promiseVanga} selectedProduct={selectedProduct} setSelectedProduct ={setSelectedProduct} totalCart={totalCart} setTotalCart = {setTotalCart}/>
                    : <SelectedProducts selectedProduct={selectedProduct} setSelectedProduct ={setSelectedProduct} totalCart={totalCart} setTotalCart = {setTotalCart}/>
    }
    

        </div>    
    );
};

export default ProCardCon;