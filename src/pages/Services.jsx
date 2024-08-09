import { Heading, ServiceCard } from "../components";
import {
  CustomerServiceIcon,
  DollarIcon,
  MoneyIcon,
  PaymentIcon,
} from "../constants/icons";
const Services = () => {
  return (
    <section className="bg-white dark:bg-gray-900  " id="services">
      <Heading
        text={"Our services"}
        description={"Feel the best experience with our rental deals"}
      />

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* image  */}
        <div className="  lg:mt-0 lg:col-span-5 lg:flex  ">
          <img
            src="https://www.freeiconspng.com/uploads/audi-jeep-q3-car-png-7.png"
            alt="mockup"
          />
        </div>
        {/* text content  */}
        <div
          className="ml-auto place-self-center lg:col-span-7  grid grid-cols-2 gap-4   max-lg:grid-cols-1
            max-sm:flex-col "
        >
          <ServiceCard
            title={"Deals for every budget"}
            description={
              "From economy cars to luxury vehicles, we have something for everyone, ensuring you get the best value for your money."
            }
            icon={<MoneyIcon size={60} />}
          />
          <ServiceCard
            title={"Best price guarantee"}
            description={
              "We ensure you get competitive rates in the market, so you can book with confidence knowing you're getting the best deal."
            }
            icon={<DollarIcon size={60} />}
          />
          <ServiceCard
            title={"Support 24/7"}
            description={
              "Our dedicated team is available 24/7 to assist you with any questions or concerns, ensuring a smooth rental experience."
            }
            icon={<CustomerServiceIcon size={60} />}
          />
          <ServiceCard
            title={"Easy payment method"}
            description={
              "Our dedicated team is working 24/7 to help you to easy payment proccess   any situation and any time they  concerns, ensuring a smooth payment experience."
            }
            icon={<PaymentIcon size={60} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
