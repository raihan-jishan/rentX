import { Hero as HeroImage } from "../assets";
import {
  CalendarIcon,
  CarIcon,
  CycleIcon,
  MotorCycleIcon,
  PlayCircleIcon,
  TrainIcon,
  TruckIcon,
  UpRightIcon,
  UsersIcon,
} from "../constants/icons";
import Button from "./Button";
import HeroCard from "./HeroCard";
const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      {/* feature items */}
      <div className="flex items-start justify-between  max-lg:flex-col">
        <div className="flex m-6 gap-6">
          <CarIcon
            size={45}
            className="hover:bg-gray-900 hover:text-gray-100  transition-all p-2 rounded-xl cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200"
          />
          <TruckIcon
            size={45}
            className="hover:bg-gray-900 hover:text-gray-100  transition-all p-2 rounded-xl cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200"
          />
          <TrainIcon
            size={45}
            className="hover:bg-gray-900 hover:text-gray-100  transition-all p-2 rounded-xl cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200"
          />
          <CycleIcon
            size={45}
            className="hover:bg-gray-900 hover:text-gray-100  transition-all p-2 rounded-xl cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200"
          />
          <MotorCycleIcon
            size={40}
            className="hover:bg-gray-900 hover:text-gray-100  transition-all p-2 rounded-xl cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200"
          />
        </div>
        <div className="  m-7">
          <h2 className="text-[1.2rem] capitalize font-bold border-b-2 border-black max-lg:text-[1.3rem] dark:text-gray-400">
            state of the some vehicle can match!
          </h2>
        </div>
      </div>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        {/* image */}
        <div className="  lg:mt-0 lg:col-span-5 lg:flex">
          <img src={HeroImage} alt="mockup" />
        </div>

        {/* text content */}

        <div className="ml-auto place-self-center lg:col-span-7 -mt-20 max-lg:mt-2">
          <h1 className="max-w-2xl mb-0 text-[7rem] font-semibold  tracking-tight leading-[0.5]      max-lg:text-[4rem]   text-primary ">
            Rent Car In
          </h1>
           
          <p className="max-w-2xl text-[7rem] font-bold text-gray-900      dark:text-gray-400 max-lg:text-[4rem]">
            worldwide
          </p>
          <div className="flex max-lg:flex-col gap-4 max-lg:m-3">
            <Button
              text={"Explore Now "}
              fontMedium
              roundedFull
              icon={<UpRightIcon size={35} />}
              pxFull
            />
            <Button
              text={"watch video "}
              fontMedium
              roundedFull
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
        <HeroCard text={" 10+ Years"} icon={<CalendarIcon size={50} />} />
        <HeroCard text={" 75+ cars"} icon={<CarIcon size={50} />} />
        <HeroCard text={" 100K+ Users"} icon={<UsersIcon size={50} />} />
      </div>
    </section>
  );
};

export default Hero;
