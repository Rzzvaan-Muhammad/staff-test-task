import React from 'react';
import { CategoryButton } from './buttons/CategoryButton';
import { PriceButton } from './buttons/PriceButton';
const FilterSidebar: React.FC<{
  setProductList: () => void;
}> = ({ setProductList }) => {
  return (
    <div className="p-6 rounded-lg max-w-sm">
      <h3 className="text-xl font-bold p-4 text-gray-600 text-center mb-6 border-b-2 border-gray-300">
        Filters
      </h3>
      <h4 className="text-xl font-bold text-gray-800 text-center mb-6">Categories</h4>
      <div className="flex flex-col gap-4">
        <CategoryButton category="Electronics" />
        <CategoryButton category="Books" />
        <CategoryButton category="Furniture" />
        <CategoryButton category="Home Appliances" />
        <CategoryButton category="Footwear" />
        <h4 className="text-xl font-bold text-gray-800 text-center my-4">Price Range</h4>
        <PriceButton minPrice={10} maxPrice={99} />
        <PriceButton minPrice={100} maxPrice={199} />
        <PriceButton minPrice={200} maxPrice={299} />
        <PriceButton minPrice={300} maxPrice={599} />
        <PriceButton minPrice={600} maxPrice={1000} />
      </div>
      <div className="mt-6">
        <button
          className="w-full flex items-center justify-center bg-blue-500 text-white font-semibold py-3 px-4 rounded-md shadow-md hover:bg-blue-600 transition-all duration-200"
          onClick={() => {
            setProductList();
          }}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
