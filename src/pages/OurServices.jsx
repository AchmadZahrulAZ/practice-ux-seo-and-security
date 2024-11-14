import React from 'react';
import Header from '../components/Header';
import Quotes from '../components/Quotes';
import WhatWeDo from '../components/WhatWeDo';
// Import komponen MetaTag
import MetaTag from '../components/MetaTag';

const OurServices = () => {
  // Mendefinisikan meta tags
  const description = 'This is OurServices page, you can find our services: Web Design/ Development, UI/UX Design, Website Migration, App Development, HubSpot Integration, Email Marketing, and more';
  const keywords = 'Services, Our Services';
  const author = 'Achmad Zahrul Ali Zadan';

  return (
    <>
      {/* Menggunakan komponen MetaTag */}
      <MetaTag description={description} keywords={keywords} author={author} />
      <Header title={'Our Services'} />
      <WhatWeDo />
      <Quotes />
    </>
  );
};

export default OurServices;
