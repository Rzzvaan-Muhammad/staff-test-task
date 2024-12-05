import React from 'react';
import FilterSidebar from '../components/FilterSidebar';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import { useProducts } from '../hooks/useProducts';

const HomePage = () => {
  const { isLoading, error, setProductList, handleCategoryChange, searchbyName } = useProducts();

  if (isLoading) {
    return (
      <div className="mt-10">
        <p className="text-center text-gray-500">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-10">
        <p className="text-center text-red-500">Failed to load products. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 flex flex-col md:flex-row gap-4 p-4">
      <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md ">
        <FilterSidebar
          setProductList={setProductList}
          handleCategoryChange={handleCategoryChange}
        />
      </div>
      <div className="flex-1">
        <SearchBar setProductList={setProductList} searchbyName={searchbyName} />
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
