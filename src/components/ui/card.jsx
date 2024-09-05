import { UpRightIcon } from "../../constants/icons";
import { PrimaryBtn } from "./button";

export const ServiceCard = ({ title, icon, description }) => {
  return (
    <div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4 transition-all hover:bg-gray-800 rounded-2xl    ">
      <div className="flex items-center justify-center text-primary hover:animate-pulse">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-200 mt-4">{title}</h3>
      <p className="text-muted-foreground mt-2 text-start lg:text-start text-gray-400">
        {description}
      </p>
    </div>
  );
};

// proccess card
export const ProccessCard = ({ text, icon }) => {
  return (
    <div
      className={`max-w-sm p-6 bg-white      dark:bg-gray-900 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-800  }`}
    >
      {/* icon */}
      <div className="flex items-center justify-center text-black dark:text-gray-100 ">
        {icon}
      </div>
      <a href="#">
        <h5 className="mb-2 text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-gray-300 border-t-4  border-black leading-[4rem]">
          {text}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
    </div>
  );
};

// ModelCard 
export const ModelCard = ({ title, imageUrl, data, description, status }) => {
  return (
    <div className="max-w-sm   overflow-hidden m-4  rounded-xl  shadow-2xl">
      <img className="w-full" src={imageUrl} alt={"card image was not found!"} />
      <div className="px-6 py-4">
        <h5 className="block mb-2   font-sans text-[1.4rem] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 dark:text-gray-200 capitalize text-black ">
          {title}
        </h5>
        <p className=" block font-sans text-[1.2rem] antialiased leading-relaxed text-inherit dark:text-gray-50 text-black  mt-5   ">
          <div className=" flex items-center justify-between">
            {description}
            <span className="inline-block dark:bg-gray-300 bg-black text-white rounded-full px-3 py-1 text-sm font-semibold dark:text-black mr-2 mb-2">
              {status}
            </span>
          </div>
        </p>
      </div>
      <div className="  ">
        <PrimaryBtn
          text={"Ride now "}
          path={`/startjourney/${data.id}`}
          icon={<UpRightIcon size={20} />}
          iconCenterLeft
          Animation
        />
      </div>
    </div>
  );
};

//  serviceCard 
// export const ServiceCard = ({icon, title, description}) => {
//   return (
//     <div>
//       <a
//         href="#"
//         className="block max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//       >
//         <div className="flex items-center justify-center dark:text-gray-200 text-black">
//           {icon}
//         </div>
//         <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">
//           {title}
//         </h5>
//         <p className="font-normal text-gray-700 dark:text-gray-400">
//           {description}
//         </p>
//       </a>
//     </div>
//   );
// };
 
