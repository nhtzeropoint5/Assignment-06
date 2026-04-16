import React, { use } from 'react';
import { useState } from "react";
import AvailableProducts from './productToggle/AvailableProducts';
import SelectedProducts from './productToggle/SelectedProducts';


const ProCardCon = ({promise}) => {

  const promiseVanga = use(promise);
  const [active, setActive] = useState("products");
  const [selectedProduct, setSelectedProduct] = useState([]);

    return (
        <div className='py-12 md:py-16 px-6 md:px-40 text-center'>
        <p className='big-text text-3xl md:text-5xl font-extrabold leading-tight md:leading-18'>Premium Digital Tools</p>
        <p className='small-text text-base md:text-lg leading-8 md:leading-10'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        
        
        {/* <div className='flex flex-col sm:flex-row items-center justify-center mt-14 px-12 py-7 border border-base-300 rounded-r-4xl'>
        <button className='btn gap-2 px-10 py-7 text-purple-500 bg-white text-lg rounded-l-4xl rounded-r-none w-full sm:w-auto mx-0'>Products</button>
        <button className='btn flex mx-0 px-12 py-7 text-lg text-white border border-white rounded-r-4xl rounded-l-none bg-purple-500 rounded-4xl w-full sm:w-auto'>Cart</button>
        </div> */}

        <div className="bg-gray-100 p-2 rounded-full w-fit mx-auto flex items-center mt-14">
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
                    ? <AvailableProducts products={promiseVanga} selectedProduct={selectedProduct} setSelectedProduct ={setSelectedProduct} />
                    : <SelectedProducts selectedProduct={selectedProduct} setSelectedProduct ={setSelectedProduct}/>
    }
    

        </div>    
    );
};

export default ProCardCon;