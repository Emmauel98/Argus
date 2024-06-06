import Featured_icon from "../../assets/Icons/Featured icon.png";
import DashBoardBackButton from "../../components/DashBoardBackButton";

const AccountCreatedComponent = () => {
  return (
    <>
      <div className=" text-center">
        <h5 className=" text-center font-medium my-[1.5rem] absolute top-[1rem] md:left-[40%]
        left-[20%]
        ">
          Already have an account? &nbsp;
          <span className=" text-[#469E57]">Sign in</span>
        </h5>
        <div className=" flex justify-center items-center mb-[1rem]">
          <img src={Featured_icon} alt="" />
        </div>
        <h1 className=" text-[#17161D] text-[1.8rem] font-bold text-center tracking-wide">
          Account created!
        </h1>
        <h4 className=" text-[#17161D99] my-[5vh]">
          This blog post has been published. Team <br /> members will be able to edit
          this post and <br /> republish changes.
        </h4>
        <DashBoardBackButton name={"Go to dashboard"} />
      </div>
    </>
  );
};

export default AccountCreatedComponent;
