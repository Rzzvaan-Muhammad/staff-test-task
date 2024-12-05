import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const SearchBar = () => {
  const { products, setProducts } = useContext(ProductContext)!; 
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    setProducts((prevProducts:any) =>
      prevProducts.filter((product:any) =>
        product.name.toLowerCase().includes(term)
      )
    );
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a product..."
        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
