import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { Product } from '../@types/typings';
import CategoryGrid from '../components/CategoryGrid/CategoryGrid';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import Footer from '../components/Footer/Footer';
import OrderTotals from '../components/OderTotals/OrderTotals';
import ProductModal from '../components/ProductModal/ProductModal';
import ProductsGrid from '../components/ProductsGrid/ProductsGrid';
import SearchBar from '../components/SearchBar/SearchBar';
import useSearchFilters from '../hooks/filter';
import useModal from '../hooks/modal';
import useOrder from '../hooks/order';
import supabase from '../services/supabaseClient';
import store from '../store';
import { getTotals } from '../store/modules/order';

interface Props {
  data: Product[];
}

function Home({ data }: Props) {
  const { order, useCancelOrder } = useOrder();

  useEffect(() => {
    store.dispatch(getTotals());
  }, [order.orderItems]);

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
        <OrderTotals order={order} />
      </ContentContainer>
      <ProductModal
        product={modalProduct}
        handleCloseModal={handleCloseModal}
        modalState={modalState}
      />
      <Footer cancelOrder={useCancelOrder} />
    </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) {
    console.log(error);
  }
  return { props: { data } };
};
