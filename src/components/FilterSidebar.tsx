import React, { useContext } from 'react';
import { ProductContext, Product } from '../context/ProductContext';

const FilterSidebar: React.FC<{ setProductList: () => void }> = ({ setProductList }) => {
  const { setProducts } = useContext(ProductContext)!;

  const handleCategoryChange = (category: string) => {
    setProducts((prevProducts: Product[]) =>
      prevProducts.filter((product: Product) => product.category.startsWith(category))
    );
  };

  return (
    <div>
      <h3 className="text-center">Filters</h3>
      <div className="flex flex-col gap-4 mt-4">
        <button
          className="btn bg-gray-500 rounded-md text-white p-2"
          onClick={() => handleCategoryChange('Electronics')}>
          Electronics
        </button>
        <button
          className="btn bg-gray-500 rounded-md text-white p-2"
          onClick={() => handleCategoryChange('Books')}>
          Books
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <button
          className="btn bg-blue-500 rounded-md text-white p-3"
          onClick={() => setProductList()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
