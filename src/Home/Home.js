import Header from '../Header/Header';
import Title from '../Components/Title/Title';
import TagSelector from '../Components/TagSelector/TagSelector';
import CardsContainer from '../Components/CardsContainer/CardsContainer';

function Home() {
  return (
    <>
      <Header/>
      <Title/>
      <TagSelector/>
      <CardsContainer/>
    </>
  );
}

export default Home;