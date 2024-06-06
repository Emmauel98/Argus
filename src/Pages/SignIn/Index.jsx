import SignInComponent from "./SignInComponent";
import cctv from "../../assets/images/cctv.png";
import TryForFree from "../../components/TryForFree";
import "./Signin.css";

const SignIn = () => {
  return (
    <>
      <div
        className=" flex justify-center items-center 
       w-screen h-screen gap-[10vw] overflow-hidden
       "
      >
        <SignInComponent />
        <div className=" lg:block hidden relative">
          <img src={cctv} alt="" className="w-[34.27vw] h-[95vh]" />
          <div className=" absolute top-0 m-[2vw] text-white">
            <h1 className=" text-[1.8rem] font-bold">Shield Your Store</h1>
            <p className=" poppins-light mt-[5vh]">
              Secure your shop from theft and loss with <br /> Argus – your AI-powered
              guard on duty 24/7.{" "}
            </p>
            <TryForFree />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
