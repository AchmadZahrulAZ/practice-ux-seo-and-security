import React from 'react';
import HomepageImage from '../assets/MaskGroup.png';
import Testimonials from '../components/TestimonialSlider';
import AboutUs from '../components/AboutUs';
import Quotes from '../components/Quotes';
import Team from '../components/Team';
import WhatWeDo from '../components/WhatWeDo';
import GetInTouch from '../components/GetInTouch';
import Planning from '../components/Planning';
import BlogCstm from '../components/BlogCstm';
import Button from '../components/Buttons/Button';
// Import komponen MetaTag
import MetaTag from '../components/MetaTag';

export default function Homepage() {
  // Mendefinisikan meta tags
  const description = 'This is Home page, there are some information about our company, our services, and our team';
  const keywords = 'home';
  const author = 'Kak Oryza, Kak Sandy, Kak Zulfatah, Achmad Zahrul Ali Zadan';

  return (
    <>
      {/* Menggunakan komponen MetaTag */}
      <MetaTag description={description} keywords={keywords} author={author} />
      <div className="bg-whitecstm font-raleway my-12 md:px-24 px-10">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="content-center justify-self-center">
            <p className="text-2xl font-bold text-peachred">\ We Are Here \</p>
            <img className="md:hidden flex py-4" src={HomepageImage} alt="Homepage Image" />
            <h1 className="md:text-5xl text-4xl font-bold text-darkblue my-4 md:leading-[58px]">
              Better Insights For <br />
              Business Growth
            </h1>
            <Button text="View More" />
          </div>
          <div className="md:flex hidden">
            <img src={HomepageImage} alt="Homepage Image" />
          </div>
        </div>
      </div>
      <AboutUs />
      <Planning />
      <WhatWeDo button={<Button text={'View More'} />} />
      <Team data={4} />
      <Testimonials />
      <GetInTouch bg={'bg-darkblue'} color="text-white" />
      <BlogCstm />
      <Quotes />
    </>
  );
}

