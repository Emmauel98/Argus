/* eslint-disable react/prop-types */
import cctvvector from "../../assets/images/cctvvector.png";

const ArgusCCTVMonitoring = ({
  heading,
  list_one_A,
  list_one_B,
  list_two_A,
  list_two_B,
}) => {
  return (
    <>
      <div className="mb-[2rem] md:mb-0">
        <div
          className=" bg-[#5FC04A] lg:w-[3vw] w-[13vw] flex justify-center items-center
          rounded-[30%] lg:py-[1.5vh] py-[1vh] md:w-[8vw]
          "
        >
          <img src={cctvvector} alt="" className=" lg:w-[60%]" />
        </div>
        <h1 className="font-LufgaBold font-semibold py-[.5rem]">
          {heading}
        </h1>
        <ul className=" list-disc ml-[1rem]">
          <li>
            {list_one_A} <br /> {list_one_B}
          </li>
          <li>
            {list_two_A} <br /> {list_two_B}
          </li>
        </ul>
      </div>
    </>
  );
};

export default ArgusCCTVMonitoring;
