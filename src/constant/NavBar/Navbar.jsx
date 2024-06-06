import { useNavigate } from "react-router-dom";
import arrowright from "../../assets/Icons/arrowrightb.png";
import moreapps from "../../assets/Icons/moreapps.png";

const Navbar = () => {
  const deviceWidth = window.outerWidth;
  const navigate = useNavigate;

  return (
    <>
      <div
        className=" flex lg:w-[50vw] lg:h-[10vh] bg-white shadow-md
         justify-between lg:rounded-[4rem] overflow-hidden lg:bg-opacity-80
          bg-opacity-50 w-[70vw] lg:p-0 p-[.5rem] rounded-[1.4rem]
          "
      >
        <div className="text-center mt-[3vh] ml-[1rem]">Logo</div>
        <ul className="justify-center gap-[2rem] items-center
         w-[70%] lg:flex hidden  lg:w-[80vw] ml-[4rem]">
          <li>Home</li>
          <li>Features</li>
          <li>Contact us</li>
          <li>Pricing</li>
          <li></li>
        </ul>
        <div className=" flex items-center w-full lg:w-[30vw]">
          <button
            className={`bg-gradient-to-r from-[#70B47B] to-[#37964B]
            flex px-[1vw] py-[1vh] gap-[.5rem]  relative
          text-white lg:h-[60%] items-center justify-center lg:right-[-10%]
          ${deviceWidth >= 1024 ? "rounded-lg" : "rounded-full"} right-[-80%]
          md:right-[-85%]
          `}
          onClick={()=> navigate('/signup')}
          >
            {deviceWidth >= 1024 ? (
              <>
                Get started
                <img src={arrowright} alt="" className="relative top-[.2vh]" />
              </>
            ) : (
              <img src={moreapps} alt="" className="p-[.5rem]" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
