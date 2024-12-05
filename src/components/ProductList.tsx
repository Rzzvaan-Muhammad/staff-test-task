import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products } = useContext(ProductContext)!; // Access the products from context

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products?.length > 0 ? (
        products?.map((product:any) => (
          <ProductCard key={product?.id} product={product} />
        ))
      ) : (
        <p className="text-gray-500 text-center col-span-full">
          No products found.
        </p>
      )}
    </div>
  );
};

export default ProductList;
