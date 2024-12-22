import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* Left Section (Hero Text and Information) */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* Camp Icon */}
        <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        {/* Title */}
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
          Putuk Truno Camp Area
        </h1>
        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app.
        </p>

        {/* Rating and Reviews */}
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>
          <p className="font-bold text-blue-500">
            198k <span className="font-normal text-gray-500">Excellent Reviews</span>
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Download App" 
            variant="dark" 
          />
          <Button 
            type="button" 
            title="How We Work?" 
            icon="/play.svg"
            variant="light" 
          />
        </div>
      </div>

      {/* Right Section (Info Box and Map Overlay) */}
      <div className="relative flex flex-1 items-start">
        {/* Info Box */}
        <div className="relative z-20 flex flex-col gap-8 w-[268px] rounded-3xl bg-green-600 px-7 py-8">
          {/* Location Info */}
          <div className="flex justify-between items-center">
            <p className="text-gray-200 text-sm">Location</p>
            <Image src="/close.svg" alt="close" width={24} height={24} />
          </div>
          <p className="font-bold text-white text-xl">Aguas Calientes</p>

          {/* Distance & Elevation */}
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-gray-200 text-sm">Distance</p>
              <p className="font-bold text-white text-xl">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-200 text-sm">Elevation</p>
              <p className="font-bold text-white text-xl">2,040 km</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Background */}
      <div className="hero-map absolute top-0 left-0 w-full h-full bg-cover bg-center z-10"></div>
    </section>
  );
};

export default Hero;
