import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

export const PriceButton: React.FC<{ minPrice: number; maxPrice: number }> = ({
  minPrice,
  maxPrice
}) => {
  const { filters, setFilters } = useContext(ProductContext)!;

  const handlePriceRange = (min: number, max: number) => {
    setFilters((prevState) => {
      return { ...prevState, maxPrice: max, minPrice: min };
    });
  };

  return (
    <button
      className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-2 text-gray-700 shadow-sm hover:shadow-md transition-all duration-200 disabled:bg-gray-300"
      onClick={() => handlePriceRange(minPrice, maxPrice)}
      disabled={
        filters.minPrice != undefined &&
        filters.maxPrice != undefined &&
        filters.maxPrice >= maxPrice &&
        filters.minPrice <= minPrice
      }>
      {`between $${minPrice} to $${maxPrice}`}
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
};
