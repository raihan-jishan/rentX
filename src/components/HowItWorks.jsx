import { Heading } from '../components';
import { BookIcon, CalendarIcon, MapIcon } from "../constants/icons";
import { PrimaryAnimation } from '../global';
import { ProccessCard } from "./ui/card";
const HowItWorks = () => {
  return (
   <PrimaryAnimation>
     <section className="dark:bg-gray-900 mt-0 p-0">
      <Heading text={"How It Works"} description={" rent with easy 3 steps"} />
      <div
        className="grid grid-cols-3   max-lg:grid-cols-1
            max-sm:flex-col     mt-20 "
      >
        <ProccessCard text={"Choose  a location"} icon={<MapIcon size={60} />} />
        <ProccessCard text={"pick-up date"} icon={<CalendarIcon size={60} />} />
        <ProccessCard text={"book a car"} icon={<BookIcon size={50} />} />
      </div>
    </section>
   </PrimaryAnimation>
  );
};

export default HowItWorks;
