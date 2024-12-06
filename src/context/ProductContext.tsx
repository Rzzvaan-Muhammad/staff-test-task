import React, { createContext, useState, ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}
export interface Filters {
  minPrice: number | undefined;
  maxPrice: number | undefined;
  selectedCategory: string | undefined;
}

type ProductContextType = {
  products: Product[];
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const ProductContext = createContext<ProductContextType | null>(null);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<{
    minPrice: number | undefined;
    maxPrice: number | undefined;
    selectedCategory: string | undefined;
  }>({ minPrice: undefined, maxPrice: undefined, selectedCategory: '' });

  return (
    <ProductContext.Provider value={{ products, setProducts, filters, setFilters }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
