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
  const { setProducts, filters, setFilters } = useContext(ProductContext)!;

  const setProductList = () => {
    if (products) {
      setProducts([...products]);
    }
    setFilters({ maxPrice: undefined, minPrice: undefined, selectedCategory: undefined });
  };

  const searchbyName = (name: string) => {
    setProducts((prevProducts: Product[]) =>
      prevProducts.filter((product: Product) => product.name.startsWith(name))
    );
  };

  useEffect(() => {
    setProductList();
  }, [products]);

  useEffect(() => {
    if (products) {
      setProducts(
        products.filter((product: Product) => {
          if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
            if (product.price < filters.minPrice || product.price > filters.maxPrice) return false;
          }

          if (filters.selectedCategory) {
            if (product.category !== filters.selectedCategory) return false;
          }

          return true; // Include product if all conditions pass
        })
      );
    }
  }, [filters, products]);

  return {
    products,
    isLoading,
    error,
    setProductList,
    searchbyName,
    filters,
    setFilters
  };
};
