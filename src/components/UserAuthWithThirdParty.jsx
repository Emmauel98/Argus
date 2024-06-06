import facebook from "../assets/Icons/Facebook.png";
import google from "../assets/Icons/Google.png";
import linkedin from "../assets/Icons/Socials.png";

const UserAuthWithThirdParty = () => {
  return (
    <>
      <div className=" flex justify-between items-center">
        <div className=" ring-1 px-[2.5rem] py-[.5rem] rounded-3xl ring-[#D1D1D1]">
          <img src={facebook} alt="" />
        </div>
        <div className=" ring-1 px-[2.5rem] py-[.5rem] rounded-3xl ring-[#D1D1D1]">
          <img src={google} alt="" />
        </div>
        <div className=" ring-1 px-[2.5rem] py-[.5rem] rounded-3xl ring-[#D1D1D1]">
          <img src={linkedin} alt="" />
        </div>
      </div>
    </>
  );
};

export default UserAuthWithThirdParty;
