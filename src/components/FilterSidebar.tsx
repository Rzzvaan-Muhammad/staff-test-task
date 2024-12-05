import React, { useContext } from 'react';
import { ProductContext, Product } from '../context/ProductContext';

const FilterSidebar: React.FC<{ setProductList: () => void }> = ({ setProductList }) => {
  const { setProducts } = useContext(ProductContext)!;

  const handleCategoryChange = (category: string) => {
    setProducts((prevProducts: Product[]) =>
      prevProducts.filter((product: Product) => product.category.startsWith(category))
    );
  };

  const Button: React.FC<{ category: string }> = ({ category }) => (
    <button
      className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-2 text-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
      onClick={() => handleCategoryChange(category)}>
      {category}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 text-gray-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </button>
  );

  return (
    <div className="p-6 rounded-lg max-w-sm">
      <h3 className="text-xl font-bold text-gray-800 text-center mb-6">Filters</h3>
      <div className="flex flex-col gap-4">
        <Button category="Electronics" />
        <Button category="Books" />
        <Button category="Furniture" />
        <Button category="Home Appliances" />
        <Button category="Footwear" />
      </div>
      <div className="mt-6">
        <button
          className="w-full flex items-center justify-center bg-blue-500 text-white font-semibold py-3 px-4 rounded-md shadow-md hover:bg-blue-600 transition-all duration-200"
          onClick={setProductList}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
