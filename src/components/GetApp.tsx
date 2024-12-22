import React from 'react';
import Button from './Button';
import Image from 'next/image';

const GetApp = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 px-6 bg-gray-50">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-start justify-center gap-6">
          <h2 className="text-4xl lg:text-6xl font-bold text-center lg:text-left text-gray-800 leading-tight">
            Get it for free now!
          </h2>
          <p className="text-lg text-gray-600 text-center lg:text-left">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-4 lg:flex-row justify-center lg:justify-start">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="dark"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="light"
              full
            />
          </div>
        </div>

        {/* Right Section (Phone Image) */}
        <div className="flex-1 flex items-center justify-center lg:justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
