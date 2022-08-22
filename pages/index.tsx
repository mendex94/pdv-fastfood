import CategoryGrid from '../components/CategoryGrid/CategoryGrid';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import Footer from '../components/Footer/Footer';
import SearchBar from '../components/SearchBar/SearchBar';

function Home() {
  return (
    <>
      <ContentContainer>
        <SearchBar />
        <CategoryGrid />
      </ContentContainer>
      <Footer />
    </>
  );
}

export default Home;
