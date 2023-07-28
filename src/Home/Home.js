import Header from '../Header/Header';
import Title from '../Components/Title/Title';
import TagSelector from '../Components/TagSelector/TagSelector';
import CardsContainer from '../Components/CardsContainer/CardsContainer';

function Home() {
  const tags = ['Skies', 'Street', 'Travel', 'Landscape', 'Macro', 'Stars', 'Storm', 'Pets', 'Flowers', 'Architecture', 'Real estate', 'Aerial', 'Drone']

  return (
    <>
      <Header/>
      <Title/>
      <TagSelector tags={tags}/>
      {/* <CardsContainer/> */}
    </>
  );
}

export default Home;