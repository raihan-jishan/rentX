import { useState } from "react";
import { Logo } from "../components/ui";
import { navLinks } from "../constants";
import { BarscloseIcon, BarsIcon, SearchIcon } from "../constants/icons";
import { PrimaryAnimation as Animation } from '../global/animation';
import { PrimaryBtn } from "./ui";
const Navbar = () => {
  // initialize the state
  const [nav, setNav] = useState(false);
  // showNav function
  const showNav = () => setNav(!nav);
  // closeNav function
  const closeNav = () => setNav(false);
  return (
   <Animation className={'sticky top-0'} >
     <nav className="bg-white dark:bg-gray-900   w-full z-20  start-0 border-b border-gray-200 dark:border-gray-600 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse  gap-5 max-lg:gap-0">
          {/* search button */}
          <div className="      dark:bg-gray-300 dark:text-black  font-semibold  capitalize rounded-full p-[0.35rem] border-2 border-black hover:bg-black transition-all hover:text-white cursor-pointer">
            <SearchIcon size={32} />
          </div>

          <PrimaryBtn
            text={"Start journey"}
            roundedFull
            path={"/startjourney/0"}
          />

          <button
            type="button"
            className="inline-flex items-center     justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600  "
            onClick={showNav}
          >
            {nav ? <BarscloseIcon size={40} /> : <BarsIcon size={40} />}
          </button>
        </div>
        <div
          className={
            nav
              ? "items-center justify-between  w-full md:flex md:w-auto md:order-1 "
              : "items-center justify-between  w-full md:flex md:w-auto md:order-1 hidden"
          }
        >
          <ul className="flex flex-col  md:p-0  font-medium   rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0       gap-[3.5rem] h-fit p-4 mt-10 ">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.path}
                    className="block    text-black   rounded   dark:text-white text-center md:bg-transparent border-t-2 border-black px-6  max-lg:text-xl   max-lg:border-0 hover:text-gray-500 transition-all dark:border-gray-400"
                    onClick={closeNav}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
   </Animation>
  );
};

export default Navbar;
