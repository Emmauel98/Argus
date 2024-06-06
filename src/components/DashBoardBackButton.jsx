/* eslint-disable react/prop-types */
import arrow from "../assets/Icons/arrowright.svg";

const DashBoardBackButton = ({name}) => {
  return (
    <>
      <div 
      className="flex gap-[1rem] m-[1rem] 
      font-medium hover:cursor-pointer">
        <button
          className="bg-gradient-to-r from-[#70B47B] to-[#37964B] text-white
             px-[1rem] py-[.5rem] w-[80vw] lg:w-[25vw] rounded-md flex md:gap-[1rem]  gap-[.1rem]
             text-[.8rem] font-medium justify-center items-center md:ml-[-1rem] md:w-[49vw]
             "
        >
          {name}
            <img src={arrow} alt="" />
        </button>
      </div>
    </>
  );
};

export default DashBoardBackButton;
