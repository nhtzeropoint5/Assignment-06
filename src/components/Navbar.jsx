import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';


const Navbar = ({selectedProduct}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className=''>
            <div className="py-8 px-6 md:px-40 bg-base-100 shadow-sm">

                
                <div className="flex items-center justify-between">
                    <span className='text-purple-500 text-4xl font-extrabold'>DigiTools</span>

          
        <div className='hidden md:flex items-center gap-6 text-lg'>
             <a href="#">Products</a>
             <a href="#">Features</a>
             <a href="#">Pricing</a>
             <a href="#">Testimonials</a>
             <a href="#">FAQ</a>
        </div>

              
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-3 text-lg">
                            <div className="relative">
                                <ShoppingCart className="w-5 h-5" />
                                {selectedProduct.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                                        {selectedProduct.length}
                                    </span>
                                )}
                            </div>
                            Login
                        </button>
                        {/* <button className="hidden md:inline-block btn gap-2 px-6 py-7 bg-purple-500 text-lg text-white rounded-4xl">
                            Get Started
                        </button> */}
                        <button className="hidden md:inline-flex btn bg-purple-500 text-white border-none px-6 text-lg rounded-full">
  Get Started
</button>
                    </div>

                
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>

  
                {menuOpen && (
                    <div className="md:hidden flex flex-col items-center gap-4 mt-4 text-lg">
                        <a href="#">Products</a>
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Testimonials</a>
                        <a href="#">FAQ</a>
                      
                        <button className="btn px-6 py-3 bg-purple-500 text-white rounded-4xl w-full">
                            Get Started
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Navbar;
