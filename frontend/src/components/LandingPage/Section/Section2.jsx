import React from 'react';
import section2 from "../../../assets/images/image.webp";

function Section2() {
  return (
    <div className="sm:px-8 md:px-10 mt-10 md:mt-20">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">
        
        {/* Left - Text Content */}
        <div className="text-center md:text-left flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-blue-800">
            Plan, Schedule, and Grow Your Audience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
            With SchedulX’s interactive calendar, you can schedule posts across multiple platforms 
            like Facebook, Instagram, LinkedIn, and more, all from a single interface. Visualize 
            your strategy for weeks ahead and stay consistent with your posting schedule.
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
            Our platform also suggests optimal posting times and hashtags, helping you maximize 
            engagement and expand your reach. Keep track of all your campaigns in one place 
            and watch your audience grow.
          </p>
        </div>

        {/* Right - Image Card */}
        <div className="flex justify-center">
          <div className="w-full border p-6 rounded-3xl shadow-xl bg-white hover:shadow-2xl transition-all duration-200 dark:hover:shadow-slate-700 hover:cursor-pointer">
            <img
              src={section2}
              alt="SchedulX Calendar Feature"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Section2;
