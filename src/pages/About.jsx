import React from 'react';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Team from '../components/Team';
import Quotes from '../components/Quotes';
// Import komponen MetaTag
import MetaTag from '../components/MetaTag';

const About = () => {
  // Mendefinisikan meta tags
  const description = 'This is About page, you can find our mission & vision, and our team member here';
  const keywords = 'About Us, Team';
  const author = 'Kak Oryza';

  return (
    <>
      {/* Menggunakan komponen MetaTag */}
      <MetaTag description={description} keywords={keywords} author={author} />
      <Header title={'About'} />
      <AboutUs />
      <Team />
      <Quotes />
    </>
  );
};

export default About;
