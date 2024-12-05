import React, { createContext, useState, ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

type ProductContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const ProductContext = createContext<ProductContextType | null>(null);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
