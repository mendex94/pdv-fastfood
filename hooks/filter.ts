import { useEffect, useState } from 'react';
import { Product } from '../@types/typings';

function useSearchFilters() {
  const [filters, setFilters] = useState({ s: '' });

  const handleSetFilters = (s: string) => {
    setFilters({ ...filters, s });
  };

  const [allProducts, setAllProducts] = useState([] as Product[]);

  const [filteredProducts, setFilteredProducts] = useState([] as Product[]);

  useEffect(() => {
    const products = allProducts.filter(
      p =>
        p.name.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 ||
        p.description.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 ||
        p.type.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0,
    );
    setFilteredProducts(products);
  }, [allProducts, filters]);

  return {
    filters,
    handleSetFilters,
    allProducts,
    setAllProducts,
    filteredProducts,
    setFilteredProducts,
  };
}

export default useSearchFilters;
