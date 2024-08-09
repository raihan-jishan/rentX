 
const HeroCard = ({text, icon}) => {
  return (
    <div className={`max-w-sm p-6 bg-white      dark:bg-gray-900 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-800  }`}>
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

export default HeroCard;
