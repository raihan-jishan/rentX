import { Heading, ServiceCard } from "../components";
import {
  CustomerServiceIcon,
  DollarIcon,
  MoneyIcon,
  PaymentIcon,
} from "../constants/icons";
import { Wrapper } from "../global";
const Services = () => {
  return (
    <section className="bg-white dark:bg-gray-900  " id="services">
      <Heading
        text={"Our services"}
        description={"Feel the best experience with our rental deals"}
      />
      {/* <ServiceCard
              title={"Deals for every budget"}
              description={
                "From economy cars to luxury vehicles, we have something for everyone, ensuring you get the best value for your money."
              }
              icon={<MoneyIcon size={60} />}
            /> */}
      <Wrapper>
        <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
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
      </Wrapper>
    </section>
  );
};

export default Services;
