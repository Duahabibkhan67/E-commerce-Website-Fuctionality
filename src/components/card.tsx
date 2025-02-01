import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <div className="relative bg-white py-10 overflow-hidden">
    
      <div className="text-center px-6">
        <h1 className="text-3xl font-bold text-gray-800">Browse The Page</h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <br />
      </div>

      {/* Second div for Images with Names */}
      <div className="ml-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 rounded-lg">
        {/* First Image with Name */}
        <div className="text-center font-semibold">
          <Image
            src="/cardimg1.png"
            width={500}
            height={500}
            alt="Dining"
            className=" sm:h-96 sm:w-auto"
          />
          <h2 className="mt-2 text-xl text-gray-800">Dining</h2>
        </div>

        {/* Second Image with Name */}
        <div className="text-center font-semibold">
          <Image
            src="/cardimg2.png"
            width={500}
            height={500}
            alt="Living"
            className="sm:h-96 sm:w-auto"
          />
          <p className="mt-2 text-xl text-gray-800">Living</p>
        </div>

        {/* Third Image with Name */}
        <div className="text-center font-semibold">
          <Image
            src="/cardimg3.png"
            width={500}
            height={500}
            alt="Bedroom"
            className=" sm:h-96 sm:w-auto"
          />
          <p className="mt-2 text-xl text-gray-800">Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
