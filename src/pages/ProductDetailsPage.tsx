import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

const fetchProductById = async (id: string | undefined): Promise<Product> => {
  const response = await axios.get(`/mockData.json`);
  const products: Product[] = response.data;

  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};

const ProductDetailsPage = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error
  } = useQuery<Product>({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id)
  });

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading product details...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500">Failed to load product details. Please try again.</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <img
        src={`https://picsum.photos/720/500?random=${product?.id}`}
        alt={product?.name}
        className="w-full h-64 lg:h-[500px] object-cover mb-6 rounded-lg shadow-md"
        loading="lazy"
        width={720}
        height={500}
      />

      <h1 className="text-3xl font-extrabold text-gray-800 mb-4 first-letter:uppercase">
        {product?.name}
      </h1>
      <p className="text-lg text-gray-600 mb-2 font-medium">Category: {product?.category}</p>
      <p className="text-2xl text-green-600 font-semibold mb-6">${product?.price}</p>

      <button
        className="inline-flex items-center gap-2 bg-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => window.history.back()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Go Back
      </button>
    </div>
  );
};

export default ProductDetailsPage;
