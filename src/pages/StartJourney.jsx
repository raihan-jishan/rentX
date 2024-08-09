import { useParams } from "react-router-dom";
import { Button } from "../components";
import { AppleStoreIcon, GooglePlay, PaymentIcon } from "../constants/icons";
import { carModels } from "../constants/index";

const StartJourney = () => {
  const { id } = useParams();
  const models = carModels.find((models) => String(models.id) === id);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 max-lg:flex  max-lg:flex-col-reverse">
        <div className="mr-auto place-self-center lg:col-span-7  ">
          <h2 className="text-2xl dark:text-gray-200 m-4 dark:bg-gray-800 bg-gray-100 flex items-center justify-between rounded-xl  ">
            Continue Ride <PaymentIcon size={40} />
          </h2>

          <h1 className="max-w-2xl mb-4 text-2xl font-semibold  tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-gray-200">
            {models.name}
          </h1>
          <p className="max-w-2xl mb-6   mt-6 text-gray-900 lg:mb-8  text-2xl   dark:text-gray-400 gap-5">
            {models.description}{" "}
            <span className="bg-black dark:bg-gray-200 dark:text-black text-white rounded-full p-1 px-4">
              {" "}
              {models.status ? models.status : "active "}
            </span>
          </p>
          <div className="flex items-center justify-center gap-10 max-lg:flex-col max-lg:block max-lg:w-full ">
            <Button
              text={"Google Play"}
              roundedFull
              Animation
              pxFull
              iconLeft={<GooglePlay size={35} />}
            />
            <div className="mt-4">
              <Button
                text={"Apple Store"}
                roundedFull
                Animation
                pxFull
                iconLeft={<AppleStoreIcon size={35} />}
              />
            </div>
          </div>
        </div>
        <div className="   lg:mt-0  lg:col-span-5 w-full lg:flex  ">
          <img src={models.image} alt="mockup" className="rounded-2xl" />
        </div>

       
      </div>
    </section>
  );
};

export default StartJourney;
