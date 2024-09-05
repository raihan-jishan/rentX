import { Hero as HeroImage } from "../assets";
import {
  CalendarIcon,
  CarIcon,
  PlayCircleIcon,
  UpRightIcon,
  UsersIcon
} from "../constants/icons";
import { PrimaryAnimation } from "../global/animation";
import Feature from "./Feature";
import { PrimaryBtn } from "./ui/button";
import { ProccessCard } from "./ui/card";
const Hero = () => {
  return (
    <PrimaryAnimation>
      <section className="bg-white  dark:bg-gray-900 ">
        {/* feature items */}
        <Feature />
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
          {/* image */}
          <div className="  lg:mt-0 lg:col-span-5 lg:flex  ">
            <img src={HeroImage} alt="mockup" />
          </div>

          {/* text content */}

          <div className="ml-auto place-self-center lg:col-span-7 -mt-20 max-lg:mt-2">
            <h1 className="max-w-2xl mb-0 text-[7rem] font-semibold  tracking-tight leading-[0.5]      max-lg:text-[4rem]   text-primary/80 ">
              Rent Car In
            </h1>

            <p className="max-w-2xl text-[7rem] font-bold text-gray-900      dark:text-gray-400 max-lg:text-[4rem]">
              worldwide
            </p>
            <div className="flex max-lg:flex-col gap-4 max-lg:m-3">
              <PrimaryBtn
                text={"Explore Now "}
                fontMedium
                roundedMedium
                icon={<UpRightIcon size={35} />}
                pxFull
              />
              <PrimaryBtn
                text={"watch video "}
                fontMedium
                roundedMedium
                icon={<PlayCircleIcon size={35} />}
                bgTransparent
                pxFull
              />
            </div>
          </div>
        </div>
        {/* info cards */}
        <div
          className="grid grid-cols-3 gap-4  mt-5 max-lg:grid-cols-1
            max-sm:flex-col max-sm:gap-3 m-4 max-lg:m-1  "
        >
          <ProccessCard text={" 10+ Years"} icon={<CalendarIcon size={50} />} />
          <ProccessCard text={" 75+ cars"} icon={<CarIcon size={50} />} />
          <ProccessCard text={" 100K+ Users"} icon={<UsersIcon size={50} />} />
        </div>
      </section>
    </PrimaryAnimation>
  );
};

export default Hero;
