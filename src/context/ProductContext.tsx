import React, { createContext, useState, ReactNode } from 'react';

type ProductContextType = { products: any; setProducts: any };
export const ProductContext = createContext<ProductContextType | null>(null);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<any>();
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
