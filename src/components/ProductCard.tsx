import React from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  const randomImageUrl = `https://picsum.photos/200/300?random=${product.id}`;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={randomImageUrl}
        alt={`${product.name}`}
        loading="lazy"
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />

      <h2 className="font-bold text-lg first-letter:uppercase text-gray-800 mb-2">
        {product.name}
      </h2>
      <p className="text-gray-500 mb-1">{product.category}</p>
      <p className="text-green-600 text-xl font-semibold mb-4">${product.price}</p>

      <button
        className="mt-auto bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 px-6 rounded-full flex items-center gap-2 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label={`View details for ${product.name}`}
        onClick={() => (window.location.href = `/product/${product.id}`)}>
        <span>View Details</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  );
};

export default ProductCard;
