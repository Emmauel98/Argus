import ButtonForUserAuth from "../../components/ButtonForUserAuth";
// import CurrentAuthPage from "../../components/CurrentAuthPage";
import Input from "../../components/Input";
import InputForPassword from "../../components/InputForPassword";
import UserAuthWithThirdParty from "../../components/UserAuthWithThirdParty";
import "./Signin.css";
import { useNavigate } from "react-router-dom";



const SignInComponent = () => {

  const navigate = useNavigate();

  return (
    <>
        <div className=" ">
        <h5 className=" text-center poppins-regular my-[1.5rem] relative
         lg:top-[-4rem] md:top-[-10rem] top-[-6rem] lg:left-[-2rem]">
        Dont have an account? &nbsp;
          <span className=" text-[#469E57] poppins-regular hover:cursor-pointer"
          onClick={()=> navigate('/signup')}
          >Sign up</span>
        </h5>
        <h1 className=" font-bold text-[1.9rem] ml-[5vw] md:ml-0 relative
         lg:top-[-1rem] md:top-[-3rem] top-[-2rem]">Sign in</h1>
        <form action="">
          <Input
            type={"text"}
            placeholder={"Enter your work email"}
            labelName={"Work Email*"}
          />
          <InputForPassword
            placeholder={"Enter password"}
            labelName={"Your password*"}
          />
          <ButtonForUserAuth name={"Login"} />
          <div>
            <h6 className="text-center mb-[3rem] mt-[1rem]">
              By signing up, you agree to our{" "}
              <span className=" text-[#797979]">Terms & Conditions</span>{" "}
            </h6>
            <div className=" relative my-[1rem]">
              <hr className="my-[3rem]" />
              <p
                className="bg-white absolute top-[-1rem] rounded-full w-[2vw] h-[4vh]
                 left-[45%] text-center
            "
              >
                or
              </p>
            </div>
            <UserAuthWithThirdParty />
          </div>
        </form>
      </div>
    </>
  )
}

export default SignInComponent;