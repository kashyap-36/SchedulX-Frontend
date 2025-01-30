import React from 'react';
import section1 from "../../../assets/images/postmodellight.png";
import { Icons } from '../../../constants';

function Section1() {
  return (
    <div className="sm:px-8 md:px-10 mt-10 md:mt-24">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src={section1}
              alt="Premium Benefits"
              className="w-full object-cover rounded-xl"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-blue-800">
              Simplify Your Social Media Management
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
              Take the hassle out of creating and scheduling posts for multiple platforms with SchedulX.
              Our intuitive interface allows you to seamlessly design, preview, and schedule content
              across LinkedIn, Instagram, Facebook, and more—all in one place.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
              Drag and drop your files, leverage our AI Assistant for captivating captions, and schedule
              posts at the perfect time to maximize your reach and engagement. Let SchedulX handle the
              logistics while you focus on creating impact.
            </p>
            <div className="flex justify-center md:justify-start flex-wrap gap-4 mt-6">
              <button className="bg-blue-800 hover:bg-blue-600 text-white flex items-center transition-all text-lg font-bold rounded-xl px-6 py-3 dark:bg-bgbutton hover:dark:bg-white hover:dark:text-black">
                Start Scheduling {Icons.arrowright}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
