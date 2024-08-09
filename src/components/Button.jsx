import { Link } from "react-router-dom";

const Button = ({
  text,
  roundedFull,
  roundedMedium,
  fontMedium,
  fontLarge,
  icon,
  bgTransparent,
  pxFull,
  Animation,
  path,
  iconLeft
}) => {
  return (
    <Link
     to={path}
      className={`p-3  flex gap-3 items-center justify-center   font-semibold  capitalize ${
        roundedFull
          ? "rounded-full"
          : roundedMedium
          ? "rounded-2xl"
          : "rounded-lg"
      } ${
        fontLarge ? "text-[4rem]" : fontMedium ? "text-2xl" : "text-[1rem]"
      } hover:scale-95 transition-all   ${
        bgTransparent
          ? "bg-transparent text-black  dark:text-gray-100 border border-black dark:border-gray-300 dark:hover:bg-gray-800 hover:bg-gray-100"
          : "bg-black dark:bg-gray-300  text-gray-100 dark:text-black "
      } ${pxFull ? "px-12 " : "px-4"} ${Animation ? "hover:gap-6 " : ""}`}
    >
    {iconLeft} {text} {icon}
    </Link>
  );
};

export default Button;
