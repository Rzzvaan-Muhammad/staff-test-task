import React, { useEffect, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import FilterSidebar from '../components/FilterSidebar';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import {
  useQuery,
} from '@tanstack/react-query'
import axios from 'axios';

const fetchProducts = async () => {
  const response = await axios.get('/mockData.json'); 
  return response.data;
};

const HomePage = () => {
  const { data: products, isLoading, error } =  useQuery({ queryKey:['products'], queryFn: fetchProducts});
  const { setProducts } = useContext(ProductContext)!; 

  useEffect(() => {
    if (products) {
      setProducts(products);
    }
  }, [products, setProducts]);

  if (isLoading) {
    return <div className='mt-10'><p className="text-center text-gray-500">Loading products...</p></div>;
  }

  if (error) {
    return <div className='mt-10'><p className="text-center text-red-500">Failed to load products. Please try again later.</p></div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="w-full md:w-1/4">
        <FilterSidebar />
      </div>
      <div className="flex-1">
        <SearchBar />
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
