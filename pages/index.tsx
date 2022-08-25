import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { Product } from '../@types/typings';
import CategoryGrid from '../components/CategoryGrid/CategoryGrid';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import Footer from '../components/Footer/Footer';
import ProductModal from '../components/ProductModal/ProductModal';
import ProductsGrid from '../components/ProductsGrid/ProductsGrid';
import SearchBar from '../components/SearchBar/SearchBar';
import useSearchFilters from '../hooks/filter';
import useModal from '../hooks/modal';
import requests from '../hooks/requests';

interface Props {
  data: Product[];
}

function Home({ data }: Props) {
  const {
    handleSetFilters,
    setAllProducts,
    filteredProducts,
    setFilteredProducts,
  } = useSearchFilters();

  const { handleOpenModal, handleCloseModal, modalProduct, modalState } =
    useModal();

  useEffect(() => {
    setAllProducts(data);
    setFilteredProducts(data);
  }, [data, setAllProducts, setFilteredProducts]);

  return (
    <>
      <ContentContainer>
        <SearchBar setFilters={handleSetFilters} />
        <CategoryGrid setFilters={handleSetFilters} />
        <ProductsGrid
          products={filteredProducts}
          handleOpenModal={handleOpenModal}
        />
      </ContentContainer>
      <ProductModal
        product={modalProduct}
        handleCloseModal={handleCloseModal}
        modalState={modalState}
      />
      <Footer />
    </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(requests.fetchProducts);
  const data = await res.json();
  return { props: { data } };
};
