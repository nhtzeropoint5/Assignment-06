import React from 'react';
import Features from './Features';




//   {
//     "id": 6,
//     "name": "Job Tracker Pro",
//     "description": "Track and manage your job applications efficiently.",
//     "price": 49.99,
//     "period": "yearly",
//     "tag": "best seller",
//     "tagType": "best seller",
//     "features": [
//       "Application tracking",
//       "Deadline reminders",
//       "Company insights",
//       "Analytics dashboard"
//     ],
//     "icon": "src/assets/products/design-tool.png"
//   }

const ProductCard = ({ product, setSelectedProduct, selectedProduct}) => {
    return (

        // ${product.tagType ==="best seller" ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 

    <div className={`card 'bg-base-100' shadow-sm`}>



  <div className="card-body space-y-5">

       
        <div className='flex justify-between items-center'>
            <div className='h-18 w-18 rounded-full border border-gray-400 flex align-center justify-center' ><img src={product.icon} alt="" className='scale-60'/></div>

          
            <span className={`badge badge-lg ${product.tagType ==="best seller" ?   `badge-warning` : 
                product.tagType ==="new" ? `badge-success` : `badge-primary`}`}>{product.tagType}</span>
          
        </div>
  

<div className='text-left flex flex-col'><h2 className="text-3xl font-bold ">{product.name}</h2>
     <p className={`text-lg text-gray-500 leading-8`}>{product.description}</p>
</div>
    <div className="flex justify-between">
     
      <span className = {`text-xl text-gray-500`} ><span className='text-2xl font-bold text-black'>{product.price}</span>/{product.period}</span>
    </div>


    <ul className="mt-6 flex flex-col gap-2 text-lg text-left">
      {
        product.features.map(feature =>(<Features feature={feature}></Features>))
      }
    </ul>
    <div className="mt-6">
      <button className={`btn btn-primary btn-block text-lg rounded-4xl py-5 px-8`}>Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;