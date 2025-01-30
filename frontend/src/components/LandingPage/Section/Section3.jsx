import React from 'react';
import section3 from "../../../assets/images/section-4.webp";

function Section3() {
  return (
    <div className="sm:px-8 md:px-10 mt-10 md:mt-20">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left - Image Card */}
        <div className="flex justify-center">
          <div className="w-full border p-6 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-200 dark:hover:shadow-slate-700 hover:cursor-pointer">
            <img
              src={section3}
              alt="Automated Scheduling Preview"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="text-center md:text-left flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-blue-800 w-full md:w-3/4 mx-auto md:mx-0">
            Save Time with Automated Scheduling
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
            SchedulX takes the repetitive tasks off your plate by publishing your content automatically
            across all connected platforms. Spend less time managing posts and more time creating
            impactful campaigns.
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
            With our intelligent scheduling system, you can halve your workload and let us handle
            the logistics. Plus, showcase your success with automated, easy-to-read performance reports.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Section3;
