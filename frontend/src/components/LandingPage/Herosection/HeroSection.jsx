import React from 'react';
import { Icons } from '../../../constants';
import hero from '../../../assets/images/hero-image.png';

function HeroSection() {
  return (
    <div className="bg-white-100 sm:px-8 lg:px-10">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Grow your audience on social and beyond
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              SchedulX helps you build an audience organically. We’re a values-driven company that provides
              affordable, intuitive marketing tools for ambitious people and teams.
            </p>
            <div className="flex justify-center lg:justify-start flex-wrap gap-4 mt-6">
              <button className="bg-blue-800 hover:bg-blue-600 text-white flex items-center transition-all text-lg font-bold rounded-xl px-6 py-3 dark:bg-bgbutton hover:dark:bg-white hover:dark:text-black">
                Get started {Icons.arrowright}
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center lg:justify-end">
            <img src={hero} alt="banner img" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
