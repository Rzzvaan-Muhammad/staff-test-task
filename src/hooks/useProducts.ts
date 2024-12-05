import { useEffect, useContext } from 'react';
import { ProductContext, Product } from '../context/ProductContext';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchProducts = async () => {
  const response = await axios.get('/mockData.json');
  return response.data;
};

export const useProducts = () => {
  const {
    data: products,
    isLoading,
    error
  } = useQuery({ queryKey: ['products'], queryFn: fetchProducts });
  const { setProducts } = useContext(ProductContext)!;

  const setProductList = () => {
    if (products) {
      setProducts(products);
    }
  };
  const handleCategoryChange = (category: string) => {
    setProducts(products.filter((product: Product) => product.category.startsWith(category)));
  };

  const searchbyName = (name: string) => {
    setProducts(products.filter((product: Product) => product.name.startsWith(name)));
  };
  useEffect(() => {
    setProductList();
  }, [products]);

  return { products, isLoading, error, setProductList, handleCategoryChange, searchbyName };
};
