/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import plus from "../../assets/images/plus.png";

const FAQComponent = ({data}) => {
  const [toggle, setToggle] = useState(false);
  const {question} = data;

  const handle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div
        className="bg-[#FBFEFA] py-[1rem] md:w-[40vw] mb-[1rem]
          px-[1rem] rounded-2xl ring-2 ring-[#FFFF] "
      >
        <div className=" flex gap-[5rem] justify-between items-center">
          <h1 className=" font-LufgaRegular font-normal">
            {question}
          </h1>
          <div
            className=" flex justify-center items-center hover:cursor-pointer"
            onClick={handle}
          >
            <img src={plus} alt="" />
          </div>
        </div>
        {toggle ? (
          <div className=" mt-[.5rem]">
            <hr />
            <p className=" font-LufgaRegular mt-[1.3rem] mb-[4rem]">
              Do I need to install any additional hardware <br /> to use Argus?
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FAQComponent;
