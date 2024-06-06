/* eslint-disable react/prop-types */
import { useState } from "react";
import eye from "../assets/Icons/eye.svg";
import eyeslash from "../assets/Icons/eye-slash.svg";

const InputForPassword = ({ placeholder, labelName }) => {
  const [inputType, setInputType] = useState("password");
  const [iconType, setIconType] = useState(eye);

  const inputHandle = () => {
    if (inputType === "password") {
      setInputType("test");
      setIconType(eyeslash);
    } else {
        setInputType('password');
        setIconType(eye);
    }
  };

  return (
    <>
      <div className="mb-[1rem] relative">
        <label htmlFor="">
          <p className=" font-normal mb-[.5rem] ml-[5vw] md:ml-0">
            {labelName}
          </p>
          <div className=" relative ">
            <input
              type={inputType}
              placeholder={placeholder}
              required
              className="lg:w-[25vw] border-2 border-[#D0D5DD] rounded-md
            px-[.5rem] w-[80vw] md:w-[50vw] py-[.5rem] invalid:border-pink-500
             invalid:text-pink-600  ml-[5vw] md:ml-0
            "
            />
            <img
              src={iconType}
              alt=""
              className="  hover:cursor-pointer
             absolute top-[.8rem] lg:right-[2.2rem] md:right-[1rem] right-[3rem]"
             onClick={inputHandle}
            />
          </div>
        </label>
      </div>
    </>
  );
};

export default InputForPassword;
