import BackButton from "../../components/BackButton";
import DashBoardBackButton from "../../components/DashBoardBackButton";
import IPAddressImageComponent from "./IPAddressImageComponent";

const IPAddressImage = () => {
  return (
    <>
      <div className="flex justify-between">
        <BackButton />
        <DashBoardBackButton name={"Go to dashboard"} />
      </div>
      <div className=" mx-[5vw] ">
        <IPAddressImageComponent />
      </div>
    </>
  );
};

export default IPAddressImage;
