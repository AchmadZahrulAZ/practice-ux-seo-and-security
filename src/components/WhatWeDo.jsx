import React from 'react';
import { Helmet } from 'react-helmet';
import ServiceTeamWork from '../assets/ServiceTeamWork.png';
import ServiceVision from '../assets/ServiceVision.png';
import ServiceGoal from '../assets/ServiceGoal.png';
import ServiceWebDesign from '../assets/ServiceWebDesign.png';
import ServiceUiUx from '../assets/ServiceUiUx.png';
import ServiceWebsite from '../assets/ServiceWebsite.png';
import ServiceApp from '../assets/ServiceApp.png';
import ServiceHubSpot from '../assets/ServiceHubSpot.png';
import ServiceEmail from '../assets/ServiceEmail.png';

const OurServices = ({ button }) => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Your Company",
    "url": "https://slicing-kelompok-4.vercel.app/",
    "logo": "https://slicing-kelompok-4.vercel.app/logo.png",
    "service": [
      {
        "@type": "Service",
        "name": "Web Design / Development",
        "description": "Professional web design and development services.",
        "image": ServiceWebDesign
      },
      {
        "@type": "Service",
        "name": "UI/UX Design",
        "description": "User interface and user experience design services.",
        "image": ServiceUiUx
      },
      {
        "@type": "Service",
        "name": "Website Migration",
        "description": "Website migration services for improved performance and stability.",
        "image": ServiceWebsite
      },
      {
        "@type": "Service",
        "name": "App Development",
        "description": "Custom app development services for various platforms.",
        "image": ServiceApp
      },
      {
        "@type": "Service",
        "name": "HubSpot Integration",
        "description": "HubSpot integration services to streamline your marketing efforts.",
        "image": ServiceHubSpot
      },
      {
        "@type": "Service",
        "name": "Email Marketing",
        "description": "Effective email marketing services to boost engagement.",
        "image": ServiceEmail
      }
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      <div className="font-raleway">
        {/* What We Do Section */}
        <section className="flex flex-col xl:flex-row items-center mb-12 bg-offwhite py-20 md:px-32 px-10 gap-8">
          {/* Left Column: Image */}
          <div>
            <img src={ServiceTeamWork} alt="Team working together" className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          {/* Right Column: Text */}
          <div>
            <h2 className="text-xl text-peachred font-semibold mb-2">\ What We Do \</h2>
            <h1 className="text-4xl font-bold text-darkblue mb-4">
              We Develop Products That <br /> People Love to Use.
            </h1>
            <p className="text-gray-600 mb-6">
              It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout.
            </p>
            <div className="flex gap-2 md:flex-row flex-col">
              {/* Vision Box */}
              <div className="p-3 bg-[#FFFFFF] rounded-lg shadow-md flex items-center">
                <div className="bg-[#ffe8ef] p-3 rounded-lg text-peachred mr-5">
                  <img src={ServiceVision} alt="Our Vision" className="min-w-8 min-h-8" />
                </div>
                <div className='min-w-32 hyphens-auto'>
                  <p className="font-semibold text-red-500">Our Vision</p>
                  <p className="text-gray-600">It is a long established fact that</p>
                </div>
              </div>
              {/* Goal Box */}
              <div className="bg-[#FFFFFF] p-3 rounded-lg shadow-md flex items-center">
                <div className="bg-[#ffe8ef] p-3 rounded-lg text-peachred mr-5">
                  <img src={ServiceGoal} alt="Our Goal" className="min-w-8 min-h-8" />
                </div>
                <div className='min-w-32 hyphens-auto'>
                  <p className="font-semibold text-red-500">Our Goal</p>
                  <p className="text-gray-600">It is a long established fact that</p>
                </div>
              </div>
            </div>
            {button}
          </div>
        </section>

        {/* Services Section */}
        <section className="text-center py-10 md:px-32 px-10">
          <h2 className="text-xl text-peachred font-semibold mb-2">\ Services \</h2>
          <h1 className="text-3xl font-bold text-darkblue mb-10">Our Expertise</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* Each card for the services */}
            <ServiceCard imgSrc={ServiceWebDesign} title="Web Design / Development" />
            <ServiceCard imgSrc={ServiceUiUx} title="UI/UX Design" />
            <ServiceCard imgSrc={ServiceWebsite} title="Website Migration" />
            <ServiceCard imgSrc={ServiceApp} title="App Development" />
            <ServiceCard imgSrc={ServiceHubSpot} title="HubSpot Integration" />
            <ServiceCard imgSrc={ServiceEmail} title="Email Marketing" />
          </div>
        </section>
      </div>
    </>
  );
};

// ServiceCard Component
const ServiceCard = ({ imgSrc, title }) => (
  <div className="p-6 bg-offwhite rounded-lg shadow-md hover:shadow-xl transition duration-300 w-90 h-80 mx-auto">
    <div className="flex items-center justify-center w-16 h-16 mb-4 bg-[#FFFFFF] rounded-md">
      <img src={imgSrc} alt={title} className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-bold text-darkblue mb-2 text-left">{title}</h3>
    <div className="flex items-center gap-2 mb-4">
      <div className="w-14 h-1 bg-peachred"></div>
      <div className="w-4 h-1 bg-peachred"></div>
    </div>
    <p className="min-w-56 text-left">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>
  </div>
);

export default OurServices;
