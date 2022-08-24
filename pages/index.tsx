import { GetServerSideProps } from 'next';
import { Product } from '../@types/typings';
import CategoryGrid from '../components/CategoryGrid/CategoryGrid';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import Footer from '../components/Footer/Footer';
import ProductsGrid from '../components/ProductsGrid/ProductsGrid';
import SearchBar from '../components/SearchBar/SearchBar';
import requests from '../hooks/requests';

interface Props {
  data: Product[];
}

function Home({ data }: Props) {
  return (
    <>
      <ContentContainer>
        <SearchBar />
        <CategoryGrid />
        <ProductsGrid products={data} />
      </ContentContainer>
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
