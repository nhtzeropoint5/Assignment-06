import { toast } from 'react-toastify';
import React from 'react';


// {
//     "id": 1,
//     "name": "Resume Starter Kit",
//     "description": "Basic resume builder for fresh graduates.",
//     "price": 0,
//     "period": "one-time",
//     "tag": "new",
//     "tagType": "new",
//     "features": [
//       "10+ templates",
//       "Basic editing tools",
//       "Export to PDF"
//     ],
//     "icon": "src/assets/products/design-tool.png"
//   }



const SelectedCard = ({ product, selectedProduct, setSelectedProduct, totalCart, setTotalCart }) => {


const handleDelete = (product) => {
const filteredProducts = selectedProduct.filter(
(fproduct) => fproduct.name !== product.name
  );

setSelectedProduct(filteredProducts);
toast.warning('Product is removed');
setTotalCart(totalCart - product.price);
};



  return (
    <div>
            <div className='flex flex-col md:flex-row items-center gap-6 justify-between p-4 md:p-10 rounded-2xl border m-3 md:m-6'>


              <div className='flex flex-col md:flex-row  items-center gap-6'>
                 <div className='h-18 w-18 rounded-full border border-gray-400 flex align-center justify-center' ><img src={product.icon} alt="" className='scale-60'/></div>

                <div>
                  <h2 className='gap-2 font-semibold text-2xl'>{product.name}</h2>
                  <p className='text-center md:text-left'>${product.price}</p>
                </div>

              </div>
              <button className='btn btn-outline btn-error' onClick={()=>  handleDelete(product)}>
                Remove
              </button>
            </div>
  </div>);
};

export default SelectedCard;