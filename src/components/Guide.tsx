import Image from 'next/image';
import React from 'react';

const Guide = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-gray-50">
      {/* Heading Section */}
      <div className="max-w-6xl w-full flex flex-col items-center px-6 pb-16">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase text-green-500 text-lg -mt-1 mb-3">We are here for you</p>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="text-lg text-gray-600 xl:max-w-[520px]">
            Only with the Hilink application will you no longer get lost, even offline, with our map feature. Invite your friends to explore the wilderness and reach the top of the mountain.
          </p>
        </div>
      </div>

      {/* Image Section with Info Box */}
      <div className="relative max-w-6xl w-full">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center rounded-xl shadow-lg"
        />
        <div className="absolute left-0 right-0 top-10 lg:top-20 mx-6 bg-white py-8 px-6 gap-6 rounded-3xl border shadow-xl">
          <div className="flex gap-4 items-center">
            <Image 
              src="/meter.svg"
              alt="meter"
              width={16}
              height={158}
              className="h-full"
            />
            <div className="flex flex-col gap-4 w-full">
              {/* Destination Info */}
              <div className="flex justify-between">
                <p className="text-gray-500 text-lg">Destination</p>
                <p className="text-green-500 text-lg font-bold">48 min</p>
              </div>
              <p className="text-2xl font-bold text-gray-800 mt-2">Aguas Calientes</p>
              {/* Start Track Info */}
              <div className="flex justify-between mt-6">
                <p className="text-gray-500 text-lg">Start Track</p>
                <h4 className="text-2xl font-bold text-gray-800 mt-2">Wonorejo Pasuruan</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
