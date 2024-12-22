import { FEATURES } from '@/constans';
import Image from 'next/image';
import React from 'react';

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container relative w-full flex justify-center lg:justify-end">
        <div className="flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone shadow-lg rounded-xl"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative mb-10">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64 text-white text-shadow">Our Features</h2>
          </div>

          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex flex-col items-start space-y-5 p-4 lg:p-6 bg-white rounded-3xl shadow-md hover:shadow-lg transition-all">
      <div className="rounded-full p-4 bg-green-50 flex items-center justify-center shadow-lg">
        <Image src={icon} alt="feature-icon" width={28} height={28} />
      </div>
      <h3 className="bold-20 lg:bold-32 capitalize text-gray-900">{title}</h3>
      <p className="regular-16 text-gray-600 lg:text-lg">{description}</p>
    </li>
  );
};

export default Features;
