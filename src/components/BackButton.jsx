import Arrow from "../assets/Icons/Arrow1.svg";

const BackButton = () => {
  return (
    <>
      <div className="flex gap-[1rem] m-[1rem] font-medium hover:cursor-pointer">
        <span className="flex items-center ">
          <img src={Arrow} alt="" />
        </span>
        <span className="flex items-center ">Back to homepage</span>
      </div>
    </>
  );
};

export default BackButton;
