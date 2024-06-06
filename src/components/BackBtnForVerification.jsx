import arrow from "../assets/Icons/arrowleft.png";

const BackBtnForVerification = () => {
  return (
    <>
      <div
        className="flex gap-[-1rem] m-[1rem] font-medium hover:cursor-pointer
        ring-1 ring-black lg:w-[7vw] px-[1rem] rounded-lg"
      >
          <img src={arrow} alt="" 
          className=" w-[5vw] h-[2vh] lg:mt-[2.7vh] md:mt-[1.4vh] mt-[2.3vh] " />
        <button
          className="bg-gradient-to-r  text-black
             px-[1rem] py-[.5rem] w-[100%] rounded-md flex md:gap-[1rem]  gap-[.1rem]
             text-[.8rem] font-medium items-center md:text-[1rem] lg:text-[.8rem]
             "
        >
          Back
        </button>
      </div>
    </>
  );
};

export default BackBtnForVerification;
