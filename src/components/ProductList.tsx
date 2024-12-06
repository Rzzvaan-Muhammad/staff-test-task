import React from 'react';
import { useContext } from 'react';
import { ProductContext, Product } from '../context/ProductContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products } = useContext(ProductContext)!;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
      {products?.length > 0 ? (
        products?.map((product: Product) => <ProductCard key={product?.id} product={product} />)
      ) : (
        <p className="text-gray-500 text-center col-span-full">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
