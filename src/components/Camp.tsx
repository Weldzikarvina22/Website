import { PEOPLE_URL } from "@/constans";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`relative h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat rounded-lg lg:rounded-5xl 2xl:rounded-5xl shadow-xl`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg lg:rounded-5xl"></div>
      <div className="relative flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-2xl font-semibold text-white">{title}</h4>
            <p className="text-sm text-white opacity-80">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-6 mt-4">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url, index) => (
              <Image
                className="inline-block h-10 w-10 rounded-full border-2 border-white"
                src={url}
                key={index}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="text-lg font-semibold text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="relative flex flex-col py-10 lg:py-20 xl:mb-20 bg-gray-100">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flex justify-center mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl shadow-xl">
          <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-semibold capitalize text-white leading-tight">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="text-sm xl:text-base mt-5 text-white opacity-80">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-quote"
            width={186}
            height={219}
            className="absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 opacity-30"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
