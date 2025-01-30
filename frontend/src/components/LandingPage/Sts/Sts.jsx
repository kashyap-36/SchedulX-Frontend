import React from 'react';
import illustration from "../../../assets/images/analytics-demo.png";

function Sts() {
  return (
    <div className="sm:px-8 md:px-10 mt-10 md:mt-20 font-[sans-serif] flex flex-col lg:flex-row items-center justify-between gap-10">
      
      {/* Left Image Section */}
      <div className="flex-1 flex justify-center">
        <img 
          src={illustration} 
          alt="Marketing Team Illustration" 
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>

      {/* Right Content Section */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 dark:text-white mb-6">
          We are like an extension <br /> of your marketing team
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          SchedulX empowers your marketing efforts by providing seamless tools for content scheduling, 
          performance tracking, and audience engagement. Our platform acts as an all-in-one solution, 
          helping you streamline your workflow, save time, and focus on growing your brand. 
          Let us handle the logistics while you connect with your audience more effectively.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {[
            { value: "500", label: "Happy Clients" },
            { value: "200", label: "Users Acquired" },
            { value: "250", label: "Team Members" },
            { value: "3,000", label: "Projects Completed" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-3 md:p-6 rounded-[32px] shadow-lg border border-gray-200 dark:bg-[#37393b] text-center"
            >
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white">
                {stat.value} <span className="text-blue-500">+</span>
              </h3>
              <p className="text-gray-500 font-medium mt-2 dark:text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Sts;
