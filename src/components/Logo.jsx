import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-gray-300 max-lg:text-[1.5rem] ">
        Rent<span className="text-primary">X</span>
      </span>
    </Link>
  );
};

export default Logo;
