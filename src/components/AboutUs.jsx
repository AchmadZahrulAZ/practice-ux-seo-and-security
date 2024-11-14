import React from "react";
import about from "../assets/about.png";
import call from "../assets/call.png";

const AboutUs = () => {
  return (
    <div className="md:px-32 px-10 py-24 bg-offwhite font-raleway">
      <div className="flex xl:flex-row flex-col items-center justify-center gap-10">
        <div>
          {/* ABOUT US IMAGE */}
          <img
            className="lg:max-h-[400px] lg:max-w-[555px]"
            src={about}
            alt="About us image"
          />
        </div>
        {/* GROUP TEXT DESCRIPTION */}
        <div className="max-w-lg">
          <h2 className="font-bold text-2xl text-peachred">\ About Us \</h2>
          <h1 className="font-bold text-4xl text-darkblue">
            One of the Fastest Way to Business Growth
          </h1>
          <p className="font-medium py-8">
            It is a long established fact that a reader will be distracted <br /> by
            the readable content of a page when looking at its layout.<br /> The point
            of using Lorem Ipsum is that it has a more-or-less<br /> normal
            distribution of letters, as opposed
          </p>
          {/* LINK TO CALL (WA) */}
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            className="group bg-white p-3 rounded-md flex md:flex-row flex-col w-full hover:bg-peachred hover:text-white transition-all ease-in-out duration-300"
          >
            <div className="flex justify-start gap-2">
              <img
                className="bg-offwhite max-w-12 max-h-12 p-3 rounded-md"
                src={call}
                alt=""
              />
              <div className="flex flex-col justify-center px-2">
                <p className="font-bold text-xl">
                  Get Instant Professional Advice
                </p>
                <p className="md:block hidden">
                  Ready to help:{" "}
                  <span className="font bold text-peachred group-hover:text-white transition-all ease-in-out duration-300">
                    +1 356 678 7897
                  </span>
                </p>
              </div>
            </div>
            {/* RESPONSIVE HIDDEN TEXT */}
            <p className="md:hidden block py-2">
              Ready to help:{" "}
              <span className="font bold text-peachred group-hover:text-white transition-all ease-in-out duration-300">
                +1 356 678 7897
              </span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
