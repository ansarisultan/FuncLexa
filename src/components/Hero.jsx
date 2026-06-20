import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="px-6 md:px-14 py-1 text-left">
        <h2 className="text-cyan-400 text-xl sm:text-2xl md:text-3xl font-bold mt-4">
          by ;- Sultan
        </h2>
        <h2 className="text-cyan-400 text-2xl sm:text-3xl md:text-4xl font-bold mt-2 max-w-[90%] sm:max-w-[50%] md:max-w-[55%] lg:max-w-[60%]">
          Where code meets intelligent system design.
        </h2>
        <p className="text-gray-100 text-lg sm:text-xl md:text-2xl mt-4 leading-relaxed max-w-[90%] sm:max-w-[50%] md:max-w-[55%] lg:max-w-[60%]">
          A suite of production-grade developer utilities, <br className="hidden sm:inline" />
          advanced conversational engines, and isolated desktop architectures.
        </p>
        <p className="text-white text-sm sm:text-base md:text-lg mt-3 font-light max-w-[90%] sm:max-w-[50%] md:max-w-[55%] lg:max-w-[60%]">
          Explore my projects, skills, and the journey <br className="hidden sm:inline" />
          behind building interactive web applications.
        </p>
      </div>
    </section>
  );
};

export default Hero;
