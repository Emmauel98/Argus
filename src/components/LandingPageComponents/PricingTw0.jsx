/* eslint-disable react/prop-types */
import arrowright from "../../assets/images/arrowright.png";
import arrowrightblack from "../../assets/images/arrowrightblack.png";

const PricingTwo = ({ data, name }) => {
  return (
    <>
      <div
        className=" lg:w-[20vw] bg-gradient-to-t from-[#FFFFFF] top-[#F9F9FA]
       ring-2 ring-[#E5E7EB] pt-[2rem] flex justify-center lg:h-[65vh]
       rounded-xl h-[60vh] mx-[1rem] lg:mx-0 my-[1rem] md:h-[42vh]
       "
      >
        <div className=" w-[90%]">
          <h1 className=" font-semibold lg:text-[1.3rem] text-center">
            {name}{" "}
            <button 
             className="lg:text-[.8rem] text-[#63AC71] bg-[rgba(99,172,113,.4)] px-2
             rounded-md
             ">
              {" "}
              . BEST VALUE
            </button>
          </h1>
          <h1 className=" font-LufgaMedium font-semibold lg:text-[1.5rem] text-center">
            $49.99<span className=" text-[#9CA3AF]">/mo</span>
          </h1>
          <div className="mb-[1rem]">
            {data.map((item) => {
              const { id, text } = item;
              return (
                <div key={id} className="flex gap-[1rem] mb-[.6rem]">
                  <div className=" flex items-center">
                    <img
                      src={arrowright}
                      alt=""
                      className="lg:w-[1.3vw] w-[4vw]"
                    />
                  </div>
                  <p className="font-medium">{text}</p>
                </div>
              );
            })}
          </div>
          <button
            className=" font-LufgaMedium font-medium flex gap-[.6rem] w-[100%]
            bg-gradient-to-t from-[#FFFFFF] top-[#F9F9FA] ring-2 ring-[#E5E7EB]
            rounded-md py-[.5rem] justify-center shadow-md mt-[4rem]
         "
          >
            Get notified
            <div>
              <img src={arrowrightblack} alt="" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default PricingTwo;
