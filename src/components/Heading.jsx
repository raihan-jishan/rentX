const Heading = ({ text, description }) => {
  return (
    <div className="  text-center  ">
      <h2 className="text-[4rem]     capitalize font-bold border-b-4 inline-block border-black dark:border-gray-200 max-lg:text-[2.8rem] text-black dark:text-gray-300 mt-10">
        {text}
      </h2>
      <div>
        <h2 className="capitalize text-center text-2xl mt-0 font-bold border-b-2 border-black inline-block  text-black dark:text-gray-400 dark:border-gray-500">
          {description}
        </h2>
      </div>
    </div>
  );
};

export default Heading;
