import DashBoardBackButton from "../../components/DashBoardBackButton";
import InputForPassword from "../../components/InputForPassword";
import "./createpassword.css";

const CreatedPasswordComponent = () => {
  return (
    <>
      <div>
        <h5
          className=" text-center font-medium my-[1.5rem] absolute top-[1rem] md:left-[40%]
        left-[20%] poppins-regular
        "
        >
          Already have an account? &nbsp;
          <span className=" text-[#469E57] poppins-regular">Sign in</span>
        </h5>
        <h1 className=" font-bold text-[1.9rem] ml-[5vw] md:ml-0 poppins-semibold">Create password</h1>
        <InputForPassword
          type={"Your password"}
          placeholder={"Enter password"}
          labelName={"Your password*"}
        />
        <InputForPassword
          type={"Your password"}
          placeholder={"Enter password"}
          labelName={"Confirm password*"}
        />
        <div>
          <ul 
          className=" list-disc marker:text-[#036FED] font-normal ml-[1.5rem] 
         leading-8
          ">
            <li>Password must be at least 6 characters</li>
            <li>Contains a symbol or number </li>
            <li>Contains at least one uppercase letter</li>
          </ul>
        </div>
        <DashBoardBackButton name={"Confirm"} />
      </div>
    </>
  );
};

export default CreatedPasswordComponent;
