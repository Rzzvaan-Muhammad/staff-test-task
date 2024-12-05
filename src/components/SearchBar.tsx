import React, { useState, useContext, useEffect } from 'react';
import { ProductContext, Product } from '../context/ProductContext';

const SearchBar = () => {
  const { setProducts } = useContext(ProductContext)!;
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm); // Update debounced term after delay
    }, 500); // Delay in milliseconds (500ms here)

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm) {
      setProducts((prevProducts: Product[]) =>
        prevProducts.filter((product: Product) =>
          product.name.toLowerCase().startsWith(debouncedTerm.toLowerCase())
        )
      );
    }
  }, [debouncedTerm, setProducts]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
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
