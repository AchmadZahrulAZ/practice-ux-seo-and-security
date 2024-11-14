import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTag = ({ description, keywords, author }) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </Helmet>
  );
};

export default MetaTag;