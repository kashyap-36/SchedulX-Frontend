import React from 'react';

function Section() {
  return (
    <div className="md:mt-28 sm:px-8 md:px-10">
      <div className="md:py-12 h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold w-full md:w-1/2 mb-6">
          High-impact services to help your business
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-white w-full">
          "SchedulX offers high-impact services designed to take your business to the next level. 
          From intuitive content scheduling to seamless integration with major social media platforms, 
          we simplify the way you manage your online presence. Our tools are crafted to help you create, 
          distribute, and analyze content effortlessly, allowing you to focus on what truly matters—growing 
          your brand and engaging with your audience. Whether you’re a solopreneur, a small business owner, 
          or part of a dynamic team, SchedulX empowers you to make every post count."
        </p>
      </div>
    </div>
  );
}

export default Section;
