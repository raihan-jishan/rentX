import React from "react";
import {
    CarIcon,
    CycleIcon,
    MotorCycleIcon,
    TrainIcon,
    TruckIcon,
} from "../constants/icons";

const Feature = () => {
  return (
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
  );
};

export default Feature;
