import { useNavigate } from "react-router-dom";
import ButtonForUserAuth from "../../components/ButtonForUserAuth";
// import CurrentAuthPage from "../../components/CurrentAuthPage";
import Input from "../../components/Input";
import UserAuthWithThirdParty from "../../components/UserAuthWithThirdParty";
import "./signup.css";

const SignUpComponent = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" ">
        <h5 className=" text-center poppins-regular my-[1.5rem]">
          Already have an account? &nbsp;
          <span className=" text-[#469E57] poppins-regular hover:cursor-pointer"
          onClick={()=> navigate('/signin')}
          >Sign in</span>
        </h5>
        <h1 className="  text-[1.9rem] ml-[5vw] md:ml-0 poppins-semibold">Create an account</h1>
        <form action="">
          <Input
            type={"text"}
            placeholder={"Enter your name"}
            labelName={"First name*"}
          />
          <Input
            type={"text"}
            placeholder={"Enter your name"}
            labelName={"Last name*"}
          />
          <Input
            type={"text"}
            placeholder={"Enter your name"}
            labelName={"Company name*"}
          />
          <Input
            type={"text"}
            placeholder={"Enter your name"}
            labelName={"Work email*"}
          />
          <ButtonForUserAuth name={"Create an account"} />
          <div>
            <h6 className="text-center">
              By signing up, you agree to our{" "}
              <span className=" text-[#797979]">Terms & Conditions</span>{" "}
            </h6>
            <div className=" relative my-[1rem]">
              <hr className="" />
              <p
                className="bg-white absolute top-[-1rem] rounded-full w-[2vw] h-[4vh]
            left-[50%] text-center
            "
              >
                or
              </p>
            </div>
            <UserAuthWithThirdParty />
            {/* <CurrentAuthPage />    */}
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpComponent;
