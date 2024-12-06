import React, { useState } from 'react';
import { CategoryButton } from './buttons/CategoryButton';
import { PriceButton } from './buttons/PriceButton';

const FilterSidebar: React.FC<{
  setProductList: () => void;
}> = ({ setProductList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        className="md:hidden fixed top-4 left-4 bg-blue-500 text-white rounded-full p-3 z-50 shadow-lg hover:bg-blue-600"
        onClick={toggleSidebar}
        aria-label="Toggle Filters">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg p-6 rounded-lg transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0 overflow-scroll' : '-translate-x-full'
        } md:relative md:translate-x-0 md:flex md:flex-col md:w-auto`}>
        <h3 className="text-xl font-bold p-4 text-gray-600 text-center mb-6 border-b-2 border-gray-300">
          Filters
        </h3>
        <h4 className="text-xl font-bold text-gray-800 text-center mb-6">Categories</h4>
        <div className="flex flex-col gap-2">
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
              toggleSidebar();
            }}>
            Reset Filters
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
          aria-label="Close Filters"></div>
      )}
    </div>
  );
};

export default FilterSidebar;
