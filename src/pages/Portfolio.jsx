import React, { useState, useEffect } from 'react';
import NothingGreat from '../assets/NothingGreat.png';
import MoreThan from '../assets/MoreThan.png';
import EnjoyWith from '../assets/EnjoyWith.png';
import TheMost from '../assets/TheMost.png';
import AvailableBalance from '../assets/AvailableBalance.png';
import Header from '../components/Header';
import Quotes from '../components/Quotes';
import ButtonSmall from '../components/Buttons/ButtonSmall';
// Import komponen MetaTag
import MetaTag from '../components/MetaTag';

export default function Portfolio() {
  // Mendefinisikan meta tags
  const description = 'This is Our Portfolio Page, you can find our project portfolio with some categories: Life, Moments, Nature, Stories, and Travel';
  const keywords = 'Portfolio';
  const author = 'Kak Sandy';

  const [activeImage, setActiveImage] = useState('');
  const [activeButton, setActiveButton] = useState(null);

  // IMAGES PER BUTTON OR GENRE
  const images = {
    ALL: [NothingGreat, MoreThan, EnjoyWith, TheMost, AvailableBalance],
    LIFE: [NothingGreat, MoreThan, EnjoyWith, TheMost],
    MOMENTS: [NothingGreat, MoreThan, EnjoyWith],
    NATURE: [NothingGreat, MoreThan],
    STORIES: [EnjoyWith, TheMost, AvailableBalance],
    TRAVEL: [NothingGreat, TheMost],
  };

  const handleButtonClick = (buttonName) => {
    setActiveImage(images[buttonName]);
    setActiveButton(buttonName);
  };

  // DEFAULT BUTTON ALL
  useEffect(() => {
    handleButtonClick('ALL');
  }, []);

  return (
    <>
      {/* Menggunakan komponen MetaTag */}
      <MetaTag description={description} keywords={keywords} author={author} />
      <Header title={'Portfolio'} />
      <div className="bg-whitecstm font-raleway text-center mt-24">
        <p className="text-2xl font-bold text-peachred">\ Portfolio \</p>
        <h1 className="text-darkblue text-4xl font-bold mt-2">Our Work</h1>
        <div className="mt-16 text-blackshade/50 text-sm font-semibold">
          {Object.keys(images).map((button) => (
            <button key={button} className={`px-9 py-3 border ${activeButton === button ? 'bg-peachred text-whitecstm' : 'border-blackshade/50'}`} onClick={() => handleButtonClick(button)}>
              {button}
            </button>
          ))}
        </div>
        {activeImage.length > 0 && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-32">
            {activeImage.map((image, index) => (
              <img key={index} src={image} alt={`Portfolio ${index}`} className="w-full h-auto rounded-md" />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center w-full py-10">
        <ButtonSmall text="Get In Touch" />
      </div>
      <Quotes />
    </>
  );
}

