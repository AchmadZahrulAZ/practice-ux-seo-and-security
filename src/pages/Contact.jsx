import React from 'react';
import Header from '../components/Header';
import GetInTouch from '../components/GetInTouch';
import Quotes from '../components/Quotes';
// Import komponen MetaTag
import MetaTag from '../components/MetaTag';

const Contact = () => {
  // Mendefinisikan meta tags
  const description = 'This is Contact page, you can contact us via email, phone, or social media platforms';
  const keywords = 'Contact';
  const author = 'Kak Oryza';

  return (
    <>
      {/* Menggunakan komponen MetaTag */}
      <MetaTag description={description} keywords={keywords} author={author} />
      <Header title={'Contact'} />
      <GetInTouch />
      <Quotes />
    </>
  );
};

export default Contact;

