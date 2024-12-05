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
    <div className="bg-white border rounded-lg p-4 flex flex-col items-center">
      <img
        src={randomImageUrl}
        alt={`${product.name}`}
        loading="lazy"
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h2 className="font-bold text-lg first-letter:uppercase">{product.name}</h2>
      <p className="text-gray-500">{product.category}</p>
      <p className="text-green-600">${product.price}</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => (window.location.href = `/product/${product.id}`)}
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
