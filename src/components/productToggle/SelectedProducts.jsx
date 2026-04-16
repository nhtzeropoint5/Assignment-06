import React from 'react';
import SelectedCard from '../cards/SelectedCard';
import { toast } from 'react-toastify';

const SelectedProducts = ({ selectedProduct, setSelectedProduct, totalCart, setTotalCart }) => {

const diminish = () =>{
  setSelectedProduct([]);
  setTotalCart(0);
  toast.success('Checkout successful!');
}

  return (
    <div className='bg-base-200 p-4 md:p-10 border border-gray-300 rounded-3xl mt-12 space-y-10'>

      {
        selectedProduct.length === 0 ? (
          <div className='h-[200px] flex items-center justify-center flex-col gap-4'>
            <h2 className='font-semibold text-xl'>No Product in the Cart</h2>
            <p>Go to available Product to select one</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-left mb-4">Your Cart</h2>

            {selectedProduct.map((product, index) => (
              <SelectedCard
                key={index}
                product={product}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                totalCart={totalCart}
                setTotalCart={setTotalCart}
              />
            ))}
             <div className='flex justify-between'><span className='text-lg text-gray-500'>Total:</span><span className='text-2xl font-bold'>{totalCart}</span></div>
            <button onClick={()=> diminish()} className='btn btn-primary w-[95%]'>Proceed to Checkout</button>
          </>
        )
      }

    </div>
  );
};

export default SelectedProducts;