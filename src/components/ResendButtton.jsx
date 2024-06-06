import arrow from "../assets/Icons/arrowrightb.png";

const ResendButtton = () => {
  return (
         <div className="flex gap-[1rem] m-[1rem] font-medium hover:cursor-pointer">
        <button
          className="bg-gradient-to-r from-[#70B47B] to-[#37964B] text-white
             px-[1rem] py-[.9rem] w-[100%] rounded-md flex md:gap-[1rem]  gap-[.1rem]
             text-[.8rem] lg:text-[.8rem] md:text-[1rem]
             "
        >
          Go to dashboard
            <img src={arrow} alt="" className=" mt-[.6vh]" />
        </button>
      </div>
  )
}

export default ResendButtton;