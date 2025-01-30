import React from 'react';
import section4 from "../../../assets/images/section-2.jpg";
import { Icons } from '../../../constants';

function Section4() {
  return (
    <div className="sm:px-8 md:px-10 mt-10 md:mt-20">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left - Text Content */}
        <div className="text-center md:text-left flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-blue-800">
            Track Performance, Optimize, and Grow
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
            With SchedulX’s analytics dashboard, you can gain real-time insights into your social 
            media performance. Monitor key metrics like impressions, engagement, and audience 
            growth to fine-tune your strategy for better results.
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
            Visualize trends across all platforms and understand what resonates with your audience. 
            From top-performing posts to detailed performance reports, SchedulX gives you everything 
            you need to make data-driven decisions.
          </p>
          <div className="flex justify-center md:justify-start flex-wrap gap-4 mt-6">
            <button className="bg-blue-800 hover:bg-blue-600 text-white flex items-center transition-all text-lg font-bold rounded-xl px-6 py-3 dark:bg-bgbutton hover:dark:bg-white hover:dark:text-black">
              View Analytics {Icons.arrowright}
            </button>
          </div>
        </div>

        {/* Right - Image Card */}
        <div className="flex justify-center">
          <div className="w-full border p-6 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-200 dark:hover:shadow-slate-700 hover:cursor-pointer">
            <img
              src={section4}
              alt="Social Media Analytics Dashboard"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Section4;
