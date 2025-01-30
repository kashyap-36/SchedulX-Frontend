import React from 'react';
import section5 from "../../../assets/images/section-3-a.webp";

function Section5() {
  return (
    <div className="px-4 sm:px-8 md:px-10 mt-10 md:mt-20">
      <div className="w-full mx-auto flex justify-center">
        <div className="w-full">
          <img
            src={section5}
            alt="SchedulX Post Creation and Scheduling"
            className="w-full h-auto object-cover rounded-xl "
          />
        </div>
      </div>
    </div>
  );
}

export default Section5;
