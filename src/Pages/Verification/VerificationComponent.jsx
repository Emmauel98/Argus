import BackBtnForVerification from "../../components/BackBtnForVerification";
import ResendButtton from "../../components/ResendButtton";

const VerificationComponent = () => {
  return (
    <>
      <div className=" text-center">
        <h5 className=" text-center font-medium my-[1.5rem] absolute top-[1rem] md:left-[40%]
        left-[20%]">
          Already have an account? &nbsp;
          <span className=" text-[#469E57]">Sign in</span>
        </h5>
        <h1 className=" text-[#17161D] text-[1.8rem] font-bold text-center tracking-wide">
          Check your email <br /> for a verification link
        </h1>
        <h4 className=" text-[#17161D99] my-[5vh]">Didn’t receive the email? Please, try to resend <br /> the email.</h4>
        <div className=" flex">
          <BackBtnForVerification />
          <ResendButtton />
        </div>
      </div>
    </>
  );
};

export default VerificationComponent;
