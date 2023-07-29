import Header from '../Header/Header';
import Title from '../Components/Title/Title';
import TagSelector from '../Components/TagSelector/TagSelector';
import CardsContainer from '../Components/CardsContainer/CardsContainer';
import React, { useState } from 'react';

function Home() {

  const [selectedTag, setSelectedTag] = useState("");

  // Photos request -> cards
  const cards = [
    {
      imageUrl: 'https://preview.redd.it/dramatic-skies-olympus-om-10-zuiko-50mm-f-1-8-fomapan-400-v0-1uewnyt06zxa1.jpg?width=640&crop=smart&auto=webp&s=b837d6572aafa50fdd663aa0687938fdd00dc967',
      shutterSpeed: '1/300',
      aperture: '1.8',
      iso: '100',
      focalLength: '50',
      tags: ['Skies', 'Street', 'Travel', 'Landscape', 'Macro', 'Stars', 'Storm', 'Pets']
    },
    {
      imageUrl: 'https://external-preview.redd.it/dramatic-skies-after-work-olympus-om-2n-50mm-cinestilll-800t-v0-Pfr01Cuz_Ietnb3h5J_oPqXYcFEWP15smVQWSE6kFXc.jpg?width=640&crop=smart&auto=webp&s=1053662e84ef2c0ac6d65da7241e3368e9899655',
      shutterSpeed: '1/300',
      aperture: '1.8',
      iso: '100',
      focalLength: '50',
      tags: ['Skies']
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbRHkQpxwJz7Ymro07owA-_JvtZCARcdXnBN2dht_XjY3OAF4WrouLSHhvL4ppsDYkEPI&usqp=CAU',
      shutterSpeed: '1/300',
      aperture: '1.8',
      iso: '100',
      focalLength: '50',
      tags: ['Skies', 'Stars']
    },
    {
      imageUrl: 'https://eloquentnature.files.wordpress.com/2020/08/a7siigcmjul2020_dsc1080cometneowisebigdippermeteor_gcm.jpg?w=584',
      shutterSpeed: '1/300',
      aperture: '1.8',
      iso: '100',
      focalLength: '50',
      tags: ['Skies', 'Stars']
    }
  ]

  const tags = getTags();

  function getTags() {
    let tags = [];

    //get all tags from photos
    cards.forEach(card => {
      tags = tags.concat(card.tags);
    });

    // remove duplicates
    let uniqueTags = [...new Set(tags)];

    return uniqueTags;
  }

  return (
    <>
      <Header />
      <Title />
      <TagSelector tags={tags} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <CardsContainer cards={cards} selectedTag={selectedTag} />
    </>
  );
}

export default Home;