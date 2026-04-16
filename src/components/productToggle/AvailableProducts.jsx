import React from 'react';
import ProductCard from '../cards/ProductCard';

const AvailableProducts = ({products, selectedProduct, setSelectedProduct}) => {


    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto px-4 mt-12'>
       
      {products.map(product => (
        <ProductCard key={product.id} product={product} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}/>
      ))}
    </div>
    
    );
};

export default AvailableProducts;