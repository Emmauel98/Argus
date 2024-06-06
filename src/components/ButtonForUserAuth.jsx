/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import arrow from "../assets/Icons/arrowrightb.png";

const ButtonForUserAuth = ({name}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mb-[1.1rem] mt-[1.7rem]">
        <button
          type="submit"
          className="bg-gradient-to-r from-[#70B47B] to-[#37964B] text-white
             px-[1rem] py-[.7rem] lg:w-[95%] rounded-md flex md:gap-[1rem]  gap-[.5rem]
             justify-center font-medium  md:w-[100%] w-[80vw] ml-[5vw] md:ml-0
             "onClick={()=> navigate('/ipaddress')}
        >
          {name}
          <div className=" mt-[.5rem]">
            <img src={arrow} alt=""  />{" "}
          </div>
        </button>
      </div>
    </>
  );
};

export default ButtonForUserAuth;
