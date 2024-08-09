import Button from "../components/Button";
import { UpRightIcon } from "../constants/icons";
const ModelCard = ({ title, imageUrl, data, description, status }) => {
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
        <Button
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

export default ModelCard;
