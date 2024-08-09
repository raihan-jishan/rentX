import { BookIcon, CalendarIcon, MapIcon } from "../constants/icons";
import Heading from "./Heading";
import HeroCard from "./HeroCard";

const HowItWorks = () => {
  return (
    <section className="dark:bg-gray-900 mt-0 p-0">
      <Heading text={"How It Works"} description={" rent with easy 3 steps"} />
      <div
        className="grid grid-cols-3   max-lg:grid-cols-1
            max-sm:flex-col     mt-20 "
      >
        <HeroCard text={"Choose  a location"} icon={<MapIcon size={60} />} />
        <HeroCard text={"pick-up date"} icon={<CalendarIcon size={60} />} />
        <HeroCard text={"book a car"} icon={<BookIcon size={50} />} />
      </div>
    </section>
  );
};

export default HowItWorks;
