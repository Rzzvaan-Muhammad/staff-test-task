import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const FilterSidebar = () => {
  const { products, setProducts } = useContext(ProductContext)!;

  const handleCategoryChange = (category: string) => {
    // Filter logic
  };

  return (
    <div>
      <h3>Filters</h3>
      <button onClick={() => handleCategoryChange('Electronics')}>Electronics</button>
      <button onClick={() => handleCategoryChange('Books')}>Books</button>
    </div>
  );
};

export default FilterSidebar;
