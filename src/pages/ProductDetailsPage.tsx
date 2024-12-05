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
  const { data: product, isLoading, error }:any = useQuery<Product>({
   queryKey: ['product', id],
   queryFn:  () => fetchProductById(id)
  });

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading product details...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500">
        Failed to load product details. Please try again.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 border rounded shadow">
      <img
        src={`https://picsum.photos/400/300?random=${product?.id}`}
        alt={product?.name}
        className="w-full h-64 object-cover mb-4 rounded-md"
        loading="lazy"
      />

      <h1 className="text-2xl font-bold mb-2">{product?.name}</h1>
      <p className="text-gray-600 mb-4">{product?.category}</p>
      <p className="text-green-600 text-xl mb-6">${product.price}</p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetailsPage;
